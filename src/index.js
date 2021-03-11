import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

dotenv.config()

const port = process.env.PORT;
const app = express();

mongoose.connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("🤗🤗🤗 MongoDB database connection established successfully");
});

const Schema = mongoose.Schema;

let locationSchema = new Schema(
  {
    clientID: {
      type: String
    },
    date:{
      type: Date
    }
  },
);

const Location = mongoose.model("location-history", locationSchema);

app.post('/location', (req, res) => {
  Location.insertMany({clientID: "Fernando", date: new Date()})
  res.send("OK!")
})

app.get("/", (req, res) => {
  res.json({msg: "Olá"});
});

app.listen(port, () => {
  console.log(`🚀🚀🚀 Application listening on port ${port}`);
})

