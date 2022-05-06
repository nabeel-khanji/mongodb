import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/mongodataapp")
  .then(() => console.log("connection successfull..."))
  .catch((err) => console.log(err));
const playListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: { type: Date, default: Date.now },
});
const PLayList = new mongoose.model("PLayList",playListSchema);
