import express from "express";
import router from "./routes/index.js";
import db from "./mongoose.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use("/", router);

app.listen(8000, (err) => {
  if (err) {
    console.log(err, "error occured while running server");
    return;
  }
  console.log("express server is running on port no 8000");
});
