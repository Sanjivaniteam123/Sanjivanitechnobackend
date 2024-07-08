import mongoose from "mongoose";

const contactScheme = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    message: {
      type: Array,
      required: true,
    },
  },
  {
    timestams: true,
  }
);

const contacts = mongoose.model("contacts", contactScheme);

export default contacts;
