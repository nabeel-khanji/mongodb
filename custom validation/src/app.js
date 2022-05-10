import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/mongodatabuiltinvalid")
  .then(() => console.log("connnection successfully ..."))
  .catch((err) => console.log(err));
const playlistSchema = new mongoose.Schema({
  name: {
    minlength: [2, "min 2 letters"],
    maxlength: [30, "max 30 letters"],
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  ctype: {
    minlength: [2, "min 2 letters"],
    maxlength: [30, "max 30 letters"],
    trim: true,
    type: String,
    required: true,
    enum: ["front end", "back end", "database"],
    lowercase: true,
  },
  videos: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("videos count shouldnot negative");
      }
    },
  },
  author: {
    minlength: 2,
    maxlength: 30,
    trim: true,
    type: String,
    required: true,
    lowercase: true,
  },
  active: Boolean,
  date: { trim: true, type: Date, default: Date.now },
});
const PLayList = new mongoose.model("Playlist", playlistSchema);
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
      name: "GOa sd",
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
createDocument();
