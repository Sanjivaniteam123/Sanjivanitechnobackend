import mongoose from "mongoose";

var mongoURL =
  "mongodb+srv://sourabhyadav201912:BGiLUOP0ovBFofQF@cluster0.zjxqqvh.mongodb.net/sanjivani-techno"

mongoose.connect(mongoURL);

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo db is successfully connected");
});
db.on("error", () => {
  console.log("Mongo db connection failed");
});

export default mongoose;
