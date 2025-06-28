const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());
const JWT_secret = 'IloveKiara';
app.listen(4000, () => {
  console.log('App is live in Port 4000');
});

let users = [];

// signUp

app.post('/Signup', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  users.push({
    username,
    password,
  });

  res.status(200).json({ msg: 'User Signed Up Successfully' });
});

// SignIn

app.post('/SignIn', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    let token = jwt.sign({ username: username, ID: 982091 }, JWT_secret);
    res.json({
      token: token,
    });
  } else {
    res.status(404).json({ Msg: 'Not found !!!' });
  }
});

// Me

app.get('/me', (req, res) => {
  let tokens = req.headers.token;
  let verifiedToken = jwt.verify(tokens, JWT_secret);

  let user = users.find((u) => u.username === verifiedToken.username);
  if (user) {
    res.json({
      password: user.password,
      username: user.username,
    });
  } else {
    res.json({
      msg: 'Invalid',
    });
  }
});
