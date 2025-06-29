const express = require('express');
const app = express();
app.use(express.json());

let users = [];

function random_token() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

// SignUp
app.post('/SignUp', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  users.push({
    username,
    password,
  });

  res.status(200).json({
    msg: 'User has been SignedUp',
  });
});

//SignIn
app.post('/SignIn', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    let token = random_token();
    user.token = Number(token);
    res.status(200).json({
      msg: 'User has been SignedIn',
      token: token,
    });
  }
});

//Me

app.get('/Me', (req, res) => {
  let token = Number(req.headers.token);
  let result = users.find((u) => u.token === token);
  if (result) {
    res.json({
      username: result.username,
      password: result.password,
    });
  } else {
    res.status(200).json({
      msg: 'Token is incorrect',
    });
  }
});

app.listen(3000, () => {
  console.log('App is been live in Port 3000');
});
