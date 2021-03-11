import express from 'express'

const port = 80;
const app = express();


app.get("/", (req, res) => {
  res.json({msg: "Olá"});
});

app.listen(port, () => {
  console.log(`🚀🚀🚀 Application listening on port ${port}`);
})

