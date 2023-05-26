import { MongoClient } from 'mongodb';
import { ObjectId } from 'bson';
import dbConnect from '../../config/dbConnect';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { id } = req.query;

  try {
    await dbConnect();
    const client = new MongoClient(process.env.DB_URI);
    await client.connect();
    const db = client.db('nextAuth'); // Replace 'DB_NAME' with your actual database name

    // Delete the blog from the "blogs" collection
    const result = await db.collection('blogs').findOneAndDelete({ _id: new ObjectId(id) });

    if (result.value === null) {
      res.status(404).json({ message: 'Blog not found' });
    } else {
      res.status(200).json({ message: 'Blog deleted successfully' });
    }
  } catch (error) {
    console.log('Error deleting blog:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
