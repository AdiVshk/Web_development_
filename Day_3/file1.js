const express = require('express');
const app = express();
app.use(express.json());

app.listen(4000, () => {
  'Express is been live on Port 4000';
});

// function isElgible(age) {
//   if (age >= 14) {
//     return true;
//   } else {
//     return false;
//   }
// }

// middleware

function isElgiblemiddle(req, res, next) {
  let age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({ msg: 'Sry mate not Eligible !!' });
  }
}

app.use(isElgiblemiddle);

app.get('/ride1', (req, res) => {
  res.json({ msg: 'You can ride !!' });
});

app.get('/ride2', (req, res) => {
  res.json({ msg: 'You can ride !!' });
});
