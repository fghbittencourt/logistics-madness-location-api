import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const locationSchema = new Schema(
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