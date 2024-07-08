import mongoose from "mongoose";

const contactScheme = new mongoose.Schema(
  {
    img: {
      data: Buffer,
      contentType: String,
    },
    topic: {
      type: String,
    },
    content: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  {
    timestams: true,
  }
);

const blogs = mongoose.model("blogs", contactScheme);

export default blogs;
