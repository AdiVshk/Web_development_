const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_secret = 'Iwillwin';
app.use(express.json());

let users = [];
// SignUp

function random_ID() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

app.post('/SignUp', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let f_name = req.body.fname;
  let l_name = req.body.lname;

  users.push({ username, password, f_name, l_name });
  res.status(200).json({
    msg: 'User got Signed UP !!! ',
  });
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
        userId: Number(random_ID()),
      },
      JWT_secret
    );
    res.status(200).json({
      token: token,
    });
  } else {
    res.status(400).json({
      msg: 'Wrong Creditials',
    });
  }
});

app.get('/Me', (req, res) => {
  let token = req.headers.token;
  let VerifiedDecodedData = jwt.verify(token, JWT_secret);
  if (VerifiedDecodedData) {
    let user = users.find((u) => u.username === VerifiedDecodedData.username);
    if (user) {
      res.status(200).json({
        firstName: user.f_name,
        lastName: user.l_name,
        ID: VerifiedDecodedData.userId,
      });
    }
  } else {
    res.status(500).json({
      msg: "User isn't Logged In ",
    });
  }
});

app.listen(3000, () => {
  console.log('App is live in port 3000');
});
