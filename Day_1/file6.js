const express = require('express');
const app = express();

app.use(express.json());

// GET method
app.get('/home', (req, res) => {
  res.send('You are in Homepage');
});

app.get('/JsonData', (req, res) => {
  res.json({ id: 1, fname: 'aditya', city: 'Mumbai' }).status(201);
});

// POST method

app.post('/username', (req, res) => {
  let body = req.body;
  res.send(JSON.stringify(body));
});

app.post('/user/:id', (req, res) => {
  let id = req.params.id;
  res.send(`Your id is ${id}`);
});

// PUT

app.put('/update/:id1', (req, res) => {
  const main_body = req.body;
  const id1 = req.params.id1;
  main_body.id = id1;
  res.send(JSON.stringify(main_body));
});

app.get('/userHome', (req, res) => {
  let fname = req.query.name;
  res.send(fname);
});

let user = [
  { id: 1, fname: 'aditya' },
  { id: 2, lname: 'farook' },
  { id: 3, jname: 'Aslam' },
];

app.delete('/remove/:id', (req, res) => {
  let no1 = req.params.id;
  user.splice(no1 - 1, 1);
  res.send(user);
});

app.listen(3001);
