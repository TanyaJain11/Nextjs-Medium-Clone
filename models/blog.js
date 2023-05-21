// import mongoose from "mongoose";

// const { Schema } = mongoose;

// const blogSchema = new Schema({
//   title: String,
//   subtitle: String,
//   category: String,
// //   image: String,
//   description: String,
//   published: {
//     type: Date,
//     default: Date.now
//   },
// //   author: {
// //     type: {
// //       name: String,
// //     //   img: String,
// //       designation: String,
// //     },
// //     default: { name: '', designation: '' },
// //     required:true,
// //   },
// author: {
//    name: { type: String },
//     image: { type: String },
//     designation: { type: String }
//   }

// });

// export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);

import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  subtitle: String,
  category: String,
  image:String,
  description: String,
  published: {
    type: Date,
    default: Date.now
  },
  author: {
    name: { type: String },
    img: { type: String },
    designation: { type: String }
  }
});

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);


