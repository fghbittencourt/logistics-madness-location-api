require('dotenv/config');
import express from 'express'


const port = process.env.PORT;
const app = express();


app.get("/", (req, res) => {
  res.json({msg: "Olá"});
});

app.listen(port, () => {
  console.log(`🚀🚀🚀 Application listening on port ${port}`);
})

