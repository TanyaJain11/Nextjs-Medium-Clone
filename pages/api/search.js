import { MongoClient } from 'mongodb';
import dbConnect from '../../config/dbConnect';

export default async function handler(req, res) {
  const { query } = req.query; // Get the search query from the request

  try {
    await dbConnect();
    const client = new MongoClient(process.env.DB_URI);
    await client.connect();
    const db = client.db('IdeaNex');

    const regexQuery = {
      $or: [
        { title: { $regex: query, $options: 'i' } }, // Case-insensitive search on the title field
        { category: { $regex: query, $options: 'i' } }, // Case-insensitive search on the category field
        { description: { $regex: query, $options: 'i' } }, // Case-insensitive search on the description field
      ],
    };
    const collection = db.collection('blogs');

    const results = await collection.find(regexQuery).toArray(); // Perform the search query on the blogs collection

    const searchResults = results.map((result) => ({
      _id: result._id,
      title: result.title,
      category: result.category,
      published:result.published,
      description: result.description,
      image: result.image,
      author: result.author,
    }));

    res.status(200).json(searchResults); // Return the search results as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}
