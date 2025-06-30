const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const path = require('path');
const JWT_secret = 'secret';
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let users = [];

// SignUp

app.post('/SignUp', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  // let fname = req.body.fname;
  // let lname = req.body.lname;

  users.push({ username, password });
  res.status(200).json({ msg: 'User Signed Up !!!' });
});

// SignIn

app.post('/SignIn', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    let token = jwt.sign(
      {
        username: user.username,
      },
      JWT_secret
    );

    res.status(200).json({ token: token });
  } else {
    res.status(404).json({ msg: 'User not Logged In ' });
  }
});

// AuthMiddleWare

app.use(function (req, res, next) {
  let token = req.headers.token;
  let VerifyData = jwt.verify(token, JWT_secret);
  if (VerifyData) {
    req.data = VerifyData;
    next();
  } else {
    res.status(400).json({
      msg: 'Token Is incorrect or Someone Tried to change it',
    });
  }
});

// Me

app.get('/Me', (req, res) => {
  let user = users.find((u) => u.username === req.data.username);
  if (user) {
    res.status(200).json({
      username: user.username,
    });
  } else {
    res.status(400).json({
      msg: 'Maybe some Database Problem',
    });
  }
});

app.listen(3000, () => {
  console.log('App is live in Port 3000');
});
