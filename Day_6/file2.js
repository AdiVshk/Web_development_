// Question : # Create an HTTP Server

// It should have 4 routes

// 1. http://localhost:3000/multiply/10/20
// 2. http://localhost:3000/sum/10/10
// 3. http://localhost:3000/divide/10/5
// 4. http://localhost:3000/subtract/20/15

// Same code but in this we will be using dynamic parameters

const express = require('express');
const app = express();
app.use(express.json());
app.listen(4000, () => {
  console.log('Requests is been listening on Port 4000');
});

app.get('/multiply/:a/:b', (req, res) => {
  let a = Number(req.params.a);
  let b = Number(req.params.b);
  res.status(200).send(a * b);
});

app.get('/sum/:a/:b', (req, res) => {
  let a = Number(req.params.a);
  let b = Number(req.params.b);
  res.status(200).send(a + b);
});

app.get('/divide/:a/:b', (req, res) => {
  let a = Number(req.params.a);
  let b = Number(req.params.b);
  res.status(200).send(a / b);
});

app.get('/subtract/:a/:b', (req, res) => {
  let a = req.params.a;
  let b = req.params.b;
  res.status(200).send(a - b);
});
