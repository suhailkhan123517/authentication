import mongoose, { Schema, models } from "mongoose";

const imageSchema = new Schema(
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

const Image = models.Image || mongoose.model("Image", imageSchema);
export default Image;
