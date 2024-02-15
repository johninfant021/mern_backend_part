const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://john-user17:Sakthi1721@cluster0.xlcyymi.mongodb.net/react-login"
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

//mongodb://localhost:27017/react-login-tut

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
