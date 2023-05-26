// import dbConnect from '../../config/dbConnect';

// import TrendingBlog from '../../models/trendingBlogs';

// export default async function handler(req, res) {
//   await dbConnect();

//   try {
//     const trendingBlogs = await TrendingBlog.find({});
//     res.status(200).json(trendingBlogs);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }


// export default async function handler(req, res) {
//   await dbConnect();

//   try {
//     const db = req.db; // Assuming you have set up MongoDB connection and stored it in the 'db' request property
//     if (!db) {
//       throw new Error('MongoDB connection not available.');
//     }

//     const collectionData = await db.collection('blogs').find({}).toArray();
//     res.status(200).json(collectionData);
//   } catch (error) {
//     console.error('Error fetching collection data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }


// import { dbConnect } from '../../config/dbConnect';

// export default async function handler(req, res) {
//   try {
//     // Connect to MongoDB
//     const client = await dbConnect();

//     // Access the "trendingPosts" collection
//     const collection = client.db().collection('trending Blogs');

//     // Fetch the trending posts
//     const trendingPosts = await collection.find().toArray();

//     // Return the trending posts as the API response
//     res.status(200).json(trendingPosts);
//   } catch (error) {
//     console.error('Error fetching trending posts:', error);
//     res.status(500).json({ message: 'Error fetching trending posts' });
//   }
// }


// 
import { MongoClient } from 'mongodb';
import dbConnect from '../../config/dbConnect';

export default async function handler(req, res) {
  try {
    // Connect to MongoDB
    await dbConnect();
    const client = new MongoClient(process.env.DB_URI);
    await client.connect();
    const db = client.db('nextAuth'); // Replace 'DB_NAME' with your actual database name

    // Access the "trendingBlogs" collection
    const collection = db.collection('blogs');

    // Fetch the trending posts
    const trendingPosts = await collection.find({}).toArray();

    // Close the MongoDB connection
    await client.close();

    // Return the trending posts as the API response
    const  data  = trendingPosts;
    // console.log(trendingPosts)
    if(data) return res.status(200).json(data)
  } catch (error) {
    console.error('Error fetching trending posts:', error);
    res.status(500).json({ message: 'Error fetching trending posts' });
  }
}


// import data from './data'

// // api/trending
// export default function handler(req, res){
//     const { Trending } = data;
//     if(Trending) return res.status(200).json(Trending)
//     return res.status(404).json({ error: "Data Not Found"})
// }
