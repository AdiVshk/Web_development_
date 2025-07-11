const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();
const JWT_secret = 'secret';
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let users = [];

app.post('/SignUp', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let fname = req.body.fname;
  let lname = req.body.lname;

  users.push({ username, password, fname, lname });
  res.status(200).json({ msg: 'User Signed Up' });
});

app.post('/SignIn', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    let token = jwt.sign({ username: user.username }, JWT_secret);
    res.status(200).json({ token: token });
  } else {
    res.status(404).json({ msg: 'Incorrect username or Incorrect Password' });
  }
});

app.use(function (req, res, next) {
  let token = req.headers.token;
  if (!token) {
    return res.status(400).json({ msg: 'User Not Logged In' });
  }
  try {
    let VData = jwt.verify(token, JWT_secret);
    req.data = VData;
    next();
  } catch (e) {
    return res.status(500).json({ msg: 'Wrong Token SomeOne Changed it !!' });
  }
});

app.get('/Me', (req, res) => {
  let user = users.find((u) => u.username === req.data.username);
  if (user) {
    res.status(200).json({
      username: user.username,
      fname: user.fname,
      lname: user.lname,
    });
  } else {
    res.status(400).json({ Msg: 'Something Went Horribly Wrong ' });
  }
});

app.listen(4000, () => {
  console.log('App is live in Port 4000');
});
