// pages/api/getPost.js
import { MongoClient } from 'mongodb';
import { ObjectId } from 'bson';
import dbConnect from '../../config/dbConnect';

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await dbConnect();
//   const client = new MongoClient(process.env.DB_URI);
//   await client.connect();
const client = new MongoClient(process.env.DB_URI);
    await client.connect();
    const db = client.db('nextAuth');

    const { id } = req.query;
  try {
    // Fetch the blog post from the "blogs" collection
    const post = await db.collection("blogs").findOne({  _id: new ObjectId(id)});

    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
