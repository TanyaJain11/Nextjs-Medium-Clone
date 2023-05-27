// import { MongoClient } from 'mongodb';
// import dbConnect from '../../config/dbConnect';
// // pages/api/blogs.js


// export default async function handler(req, res) {
//   console.log("jdkjd")
//   if (req.method !== "GET") {
//     res.status(405).json({ message: "Method Not Allowed" });
//     return;
//   }

//   const { email } = req.query;

//   try {
//     await dbConnect();
//     const client = new MongoClient(process.env.DB_URI);
//     await client.connect();
//     const db = client.db('IdeaNex'); // Replace 'DB_NAME' with your actual database name

//     // Access the "trendingBlogs" collection
//     const blogs = await db
//       .collection("blogs")
//       .find({ email: email })
//       .toArray();

//     res.status(200).json(blogs);
//   } catch (error) {
//     console.log("Error fetching blogs:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }

  
import { MongoClient } from 'mongodb';
import dbConnect from '../../config/dbConnect';

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { email } = req.query;

  try {
    await dbConnect();
    const client = new MongoClient(process.env.DB_URI);
    await client.connect();
    const db = client.db('IdeaNex'); // Replace 'DB_NAME' with your actual database name

    const blogs = await db
      .collection("blogs")
      .find({ "author.email": email }) // Search within the "author" field
      .toArray();

    res.status(200).json(blogs);
  } catch (error) {
    console.log("Error fetching blogs:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
