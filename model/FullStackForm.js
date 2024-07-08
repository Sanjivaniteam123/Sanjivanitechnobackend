import mongoose from "mongoose";

const fullStackSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNo: {
      type: String,
    },
    lookingFor: {
      type: Array,
    },
    about: {
      type: Array,
    },
  },
  {
    timestams: true,
  }
);
const fullstack = mongoose.model("fullstack", fullStackSchema);

export default fullstack;
