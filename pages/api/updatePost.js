// pages/api/updatePost.js

import dbConnect from '../../config/dbConnect';
import { ObjectId } from 'bson';
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  await dbConnect();
//   const client = new MongoClient(process.env.DB_URI);
//   await client.connect();


const { id } = req.query;
  const updatedPostData = req.body;
  const client = new MongoClient(process.env.DB_URI);
    await client.connect();
    const db = client.db('nextAuth');

  try {
    // Update the blog post in the "blogs" collection
    await db.collection("blogs").updateOne(
      {_id: new ObjectId(id)},
      { $set: updatedPostData }
    );

    res.status(200).json({ message: "Blog post updated successfully" });
  } catch (error) {
    console.error("Error updating blog post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
