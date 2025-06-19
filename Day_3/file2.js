// ALL ABOUT MIDDLEWARE

const express = require('express');
const app = express();
app.use(express.json());
app.listen(5000);

// Exercise - 1
// app.use(function (req, res, next) {
//   console.log(`${req.url} and ${req.method}`);
//   next();
// });

// app.get('/home', (req, res) => {
//   res.status(200).json({ msg: 'Done' });
// });

// app.post('/home', (req, res) => {
//   res.status(200).json({ msg: 'Done' });
// });
// -----------------------------------------------------------------

// Exercise 2

// app.use(function (req, res, next) {
//   req.a = Number(req.query.a);
//   req.b = Number(req.query.b);
//   next();
// });

// app.get('/add', (req, res) => {
//   res.status(200).send(req.a + req.b);
// });

// app.get('/mul', (req, res) => {
//   res.status(200).send(req.a * req.b);
// });

// -----------------------------------------------------------------

// Exercise 3

// 🧩 Level 2: Add Timestamp

// app.use(function (req, res, next) {
//   req.date = new Date();
//   next();
// });

// app.get('/Date', (req, res) => {
//   res.status(200).send(`User Requested : ${req.date}`);
// });

//-----------------------------------------------------------------

// Exercise 3

// app.use(function (req, res, next) {
//   let password = req.query.password;
//   if (password == 'letmein') {
//     next();
//   } else {
//     res.status(404).send('Wrong Password');
//   }
// });

// app.get('/club', (req, res) => {
//   res.status(200).send('Welcome to the Club18');
// });

//-----------------------------------------------------------------

// Exercise 4

// app.use(function (req, res, next) {
//   let start = new Date();
//   start.setHours(9, 0, 0);

//   let end = new Date();
//   end.setHours(17, 0, 0);

//   let now = new Date(); // current time
//   if (now > start && now < end) {
//     next();
//   } else {
//     res.status(400).send('Office closed 💤');
//   }
// });

// app.get('/work', (req, res) => {
//   res.send('Tell me !! how can i Help you !! ');
// });

// 🧩 Level 5: POST Body Checker

// app.use(function (req, res, next) {
//   body = req.body;
//   if (body.name) {
//     next();
//   } else {
//     res.status(400).json({ msg: 'Name is required' });
//   }
// });

// app.post('/register', (req, res) => {
//   res.status(200).send(req.body.name);
// });





// app.post('/data', (req, res) => {
//   let body = req.body;
//   res.send(JSON.stringify(body));
// });

// app.get('/data', (req, res) => {
//   let a = parseInt(req.query.a);
//   let b = parseInt(req.query.b);

//   res.status(200).send(a * b);
// });
