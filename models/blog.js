import mongoose, { Schema, models } from "mongoose";

const blogSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;
