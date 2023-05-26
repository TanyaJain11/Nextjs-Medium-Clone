import Blog from "../../models/blog";
import dbConnect from "../../config/dbConnect";


dbConnect();


export default async function handler(req, res) {
  
  const { method } = req;


  switch (method) {
    case "POST":
      try {
        await dbConnect(); // Call dbConnect only once here
        // const author =  {data.user.name}


        const { title, subtitle, category,image,description,author } = req.body;
        console.log(req.body);

        const newBlog = new Blog({
          // blog_id,
          title,
          subtitle,
          category,
          image,
          description,
          author,
        });

        console.log(newBlog);

        const savedBlog = await newBlog.save();
        console.log("Saved blog:", savedBlog);

        res.status(201).json({ success: true, data: savedBlog });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
