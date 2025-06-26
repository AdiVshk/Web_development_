const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.listen(2000);

let arr = ['aditya', 'Faroouk'];

app.get('/home', (req, res) => {
  res.status(200).send(arr);
});
