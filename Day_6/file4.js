const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log(`app is live in port 3000`);
});

let reqCounter = 0;

app.use(function counter(req, res, next) {
  reqCounter++;
  next();
});

app.use(function DataMiddleWare(req, res, next) {
  let date = new Date();
  console.log(req.method);
  console.log(req.hostname);
  console.log(req.url);
  console.log(date);

  next();
});

app.get('/home', (req, res) => {
  res.send('Welcome to home !!' + reqCounter);
});

app.post('/dataSend', (req, res) => {
  res.send('Data added' + reqCounter);
});

app.put('/modify', (req, res) => {
  res.status(200).send('Tysm' + reqCounter);
});

app.delete('/Vanish', (req, res) => {
  res.status(200).send({
    msg: 'data is been deleted !!' + reqCounter,
  });
});
