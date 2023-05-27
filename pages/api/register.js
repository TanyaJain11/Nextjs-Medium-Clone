// // import user from "../../models/user";
// import dbConnect from "../../config/dbConnect";
// import User from "../../models/user";

// export default async function handler(req,res){
//     if(req.method=='POST'){
//         dbConnect();

//         const {name,email,password}= req.body;
//         const user = await User.create({name,email,password})

//         res.status(201).json({user});
//     }
// }
import dbConnect from "../../config/dbConnect";
import User from "../../models/user";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();
      
      const { name, email,password} = req.body;
      console.log(req.body);
      
      const user = await User.create({ name, email, password});
      console.log(user)

      res.status(201).json({ user });
    } catch (error) {
      res.status(500).json({ error: "Error creating user" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}


