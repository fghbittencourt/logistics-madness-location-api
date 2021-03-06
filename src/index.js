import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const port = process.env.PORT;
const app = express();

mongoose.connect(process.env.DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const { connection } = mongoose;

connection.once('open', function () {
  console.log('๐ค๐ค๐ค MongoDB database connection established successfully');
});

app.post('/location', (req, res) => {
  Location.insertMany({ clientID: 'Fernando', date: new Date() });
  res.send('OK!');
});

app.get('/', (req, res) => {
  res.json({ msg: 'Olรก' });
});

app.listen(port, () => {
  console.log(`๐๐๐ Application listening on port ${port}`);
});
