// import data from '../data'


// // api/posts/1
// export default function handler(req, res){
//     const { postId } = req.query;
//     const { Posts }  = data;

//     if(postId){
//         const post = Posts.find( value => value.id == postId)
//         return res.status(200).json(post)
//     }

//     return res.status(404).json({ error : "Post Not Found"})

// }

import dbConnect from '../../../config/dbConnect';
import Blog from '../../../models/blog';
import mongoose from 'mongoose';

dbConnect();

export default async function handler(req, res) {
  const { postId } = req.query;
  console.log("r",postId)

  try {
    if (postId) {
      const post = await Blog.findById(postId);

      if (post) {
        return res.status(200).json(post);
      }
    }

    return res.status(404).json({ error: 'Post Not Found' });
  } catch (error) {
    console.error('Error fetching post:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
