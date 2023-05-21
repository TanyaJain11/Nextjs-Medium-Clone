import Blog from "../../models/blog"
import dbConnect from "../../config/dbConnect";

// export async function addBlog(req,res){
//     try {
//         var data = req.body;
//         console.log(data)
//         if (!data.title) {
//             return res.send({ error: `Name is required` })
//         }
//         if (!data.category) {
//             return res.send({ error: `Address is required` })
//         }
//         if (!data.description) {
//             return res.send({ error: `Contact number is required` })
//         }
//         // if (!data.) {
//         //     return res.send({ error: `Bike number is required` })
//         // }
//         const newBlog = await Blog.create(data);
//         res.json(newBlog)
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: `error in adding Blog`,
//         })
//     }
// }

export default async function handler(req,res){
    // try {
    //     const blog = new Blog(req.body);
    //     const savedBlog = await blog.save();
    //     res.status(201).json(savedBlog);
    //   } catch (error) {
    //     console.error("Error saving blog:", error);
    //     res.status(500).json({ error: "Failed to save blog" });
    //   }
    if(req.method=='POST'){
        dbConnect();
       console.log(req.body);
        const {title,subtitle,category,description,author}= req.body;
        const blog = await Blog.create({title,subtitle,category,description,author})

        res.status(201).json({blog});
    }
}