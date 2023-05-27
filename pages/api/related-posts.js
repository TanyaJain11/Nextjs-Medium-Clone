// import { MongoClient } from 'mongodb';
// import dbConnect from '../../config/dbConnect';


// export default async function handler(req, res) {
//   const { category } = req.query;

//   try {
//     // Connect to your MongoDB database
//     await dbConnect();
//     const client = new MongoClient(process.env.DB_URI);
//     await client.connect();
//     const db = client.db('IdeaNex'); // Replace 'DB_NAME' with your actual database name

//     // Access the "trendingBlogs" collection
//     const collection = db.collection('blogs');

//     const relatedPosts = await collection.find({ category }).toArray();

//     client.close();

//     res.status(200).json(relatedPosts);
//   } catch (error) {
//     console.error('Error fetching related posts:', error);
//     res.status(500).json({ error: 'Error fetching related posts' });
//   }
// }

import { MongoClient } from 'mongodb';
import dbConnect from '../../config/dbConnect';

export default async function handler(req, res) {
  const { category, title } = req.query;

  try {
    // Connect to your MongoDB database
    await dbConnect();
    const client = new MongoClient(process.env.DB_URI);
    await client.connect();
    const db = client.db('IdeaNex'); // Replace 'DB_NAME' with your actual database name

    // Access the "blogs" collection
    const collection = db.collection('blogs');

    // Fetch related posts excluding the current post with the same title
    const relatedPosts = await collection.find({ category, title: { $ne: title } }).toArray();

    client.close();

    res.status(200).json(relatedPosts);
  } catch (error) {
    console.error('Error fetching related posts:', error);
    res.status(500).json({ error: 'Error fetching related posts' });
  }
}

