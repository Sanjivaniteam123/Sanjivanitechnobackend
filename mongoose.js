import mongoose from "mongoose";

var mongoURL =
  "mongodb+srv://yadavkaran471:UodgikBSn4hL8ojT@cluster0.67r13yb.mongodb.net/sanjivani-techno";

mongoose.connect(mongoURL);

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo db is successfully connected");
});
db.on("error", () => {
  console.log("Mongo db connection failed");
});

export default mongoose;
