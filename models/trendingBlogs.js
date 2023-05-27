import mongoose from "mongoose";

const { Schema } = mongoose;

const trendingBlogSchema = new Schema({
  title: String,
  subtitle: String,
  category: String,
  img:String,
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

export default mongoose.models.Blog || mongoose.model("trending Blogs", trendingBlogSchema);