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
const PLayList = new mongoose.model("PLayList", playListSchema);
const createDocument = async () => {
  try {
    const reactPlayList = new PLayList({
      name: "Node Js",
      ctype: "Back End",
      videos: 86,
      author: "Nabeel",
      active: true,
    });
    const mongodbPlayList = new PLayList({
      name: "MongoDB",
      ctype: "Database",
      videos: 86,
      author: "Nabeel",
      active: true,
    });
    const expressPlayList = new PLayList({
      name: "Express Js",
      ctype: "Back End",
      videos: 86,
      author: "Nabeel",
      active: true,
    });

    const jsPlayList = new PLayList({
      name: "Javascript",
      ctype: "Front End",
      videos: 186,
      author: "Nabeel",
      active: true,
    });
    const result = await PLayList.insertMany([
      jsPlayList,
      expressPlayList,
      mongodbPlayList,
      reactPlayList,
    ]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// createDocument();
const readDocuments = async () => {
  try {
    const result = await PLayList.find({ ctype: { $nin: ['Back End','Database'] } }).select({
      name: 1,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
readDocuments();
