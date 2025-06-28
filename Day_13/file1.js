// Without JWT Token

const express = require('express');
const app = express();
app.use(express.json());

let users = [];

function random_token() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

// Signup
app.post('/signUp', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  users.push({ username, password });

  console.log(users);
});

// SignIn

app.post('/signIn', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let results = users.find(
    (u) => u.username === username && u.password === password
  );

  if (results) {
    let token = random_token();
    results.token = token;
  }

  console.log(users);
});

// me
app.get('/me', (req, res) => {
  let token = Number(req.headers.token);

  let result = users.find((u) => u.token === token);
  if (result) {
    res.status(200).send({ username: result.username }); // ✅ Use result, not users
  } else {
    res.status(401).send('unauthorized'); // ✅ Better status code for unauthorized
  }
});

app.listen(3000, () => {
  console.log(`App is live in Port 3000`);
});
