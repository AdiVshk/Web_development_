const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { UserModel, TODOmODEL } = require('./db');
// const { decode } = require('punycode');
const JWT_secret = 'qwerty12345';
const app = express();
app.use(express.json());

mongoose.connect(
  'mongodb+srv://admin:ztyPFwS4HR1NU7xG@cluster0.zsvdkwb.mongodb.net/TODO_DATABASE'
);

// SIGNUP

app.post('/signUp', async function (req, res) {
  let Username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  await UserModel.create({
    Username: Username,
    password: password,
    Email: email,
  });

  res.status(200).json({
    msg: 'User Signed Up !!!',
  });
});

// SIGNIN

app.post('/SignIn', async function (req, res) {
  let Username = req.body.username;
  let password = req.body.password;

  let users = await UserModel.findOne({
    Username,
    password,
  });

  if (users) {
    let token = jwt.sign(
      {
        userId: users._id.toString(),
      },
      JWT_secret
    );
    res.status(200).json({ token });
  }
});

app.use(function (req, res, next) {
  let token = req.headers.token;
  let decodedData = jwt.verify(token, JWT_secret);

  if (decodedData) {
    req.userId = decodedData.userId;
    next();
  } else {
    res.status(500).json({ msg: 'Invalid Info' });
  }
});

// POST

app.post('/todo', async function (req, res) {
  await TODOmODEL.create({
    title: req.body.title,
    done: req.body.done,
    userID: req.userId,
  });

  res.status(400).json({ msg: 'TODO posted !!' });
});

//GET

app.get('/todos', async function (req, res) {
  let userID = req.userId;
  let todo = await TODOmODEL.find({
    userID,
  });

  res.status(200).json({ todo });
});

app.listen(3000);

// const express = require('express');
// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');
// const { UserModel, TODOmODEL } = require('./db');
// const app = express();
// app.use(express.json());

// const JWT_secret = 'qwerty12345';

// mongoose.connect(
//   'mongodb+srv://admin:ztyPFwS4HR1NU7xG@cluster0.zsvdkwb.mongodb.net/TODO_DATABASE'
// );

// // SIGNUP
// app.post('/signUp', async (req, res) => {
//   const { username, password, email } = req.body;
//   await UserModel.create({ username, password, email });
//   res.status(200).json({ msg: 'User Signed Up !!!' });
// });

// // SIGNIN
// app.post('/signIn', async (req, res) => {
//   const { username, password } = req.body;
//   const user = await UserModel.findOne({ username, password });

//   if (user) {
//     const token = jwt.sign({ userId: user._id.toString() }, JWT_secret);
//     res.status(200).json({ token });
//   } else {
//     res.status(401).json({ msg: 'Invalid Credentials' });
//   }
// });

// // AUTH MIDDLEWARE
// // app.use((req, res, next) => {
// //   try {
// //     const token = req.headers.token;
// //     const decoded = jwt.verify(token, JWT_secret);
// //     req.userId = decoded.userId;
// //     next();
// //   } catch (err) {
// //     res.status(401).json({ msg: 'Invalid Token' });
// //   }
// // });

// app.use((req, res, next) => {
//   try {
//     // Try to read the token from Authorization header (Bearer token)
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ msg: 'Token missing or malformed' });
//     }
//     const token = authHeader.split(' ')[1]; // Get the actual token
//     const decoded = jwt.verify(token, JWT_secret); // Verify token
//     req.userId = decoded.userId; // Attach userId to request
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: 'Invalid Token' });
//   }
// });

// // CREATE TODO
// app.post('/todo', async (req, res) => {
//   await TODOmODEL.create({
//     title: req.body.title,
//     done: req.body.done,
//     userID: req.userId,
//   });
//   res.status(201).json({ msg: 'TODO posted !!' });
// });

// // GET TODOS
// app.get('/todos', async (req, res) => {
//   const todos = await TODOmODEL.find({ userID: req.userId });
//   res.status(200).json({ todos });
// });

// // START SERVER
// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

// index.js
// const express = require('express');
// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');
// const { UserModel, TODOmODEL } = require('./db');

// const app = express();
// app.use(express.json());

// const JWT_SECRET = 'qwerty12345';

// mongoose
//   .connect(
//     'mongodb+srv://admin:ztyPFwS4HR1NU7xG@cluster0.zsvdkwb.mongodb.net/TODO_DATABASE'
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.error(err));

// // ✅ SIGN UP
// app.post('/signUp', async (req, res) => {
//   const { username, password, email } = req.body;

//   try {
//     const existing = await UserModel.findOne({ username });
//     if (existing)
//       return res.status(409).json({ msg: 'Username already exists' });

//     await UserModel.create({ username, password, email });
//     res.status(200).json({ msg: 'User signed up successfully' });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// // ✅ SIGN IN
// app.post('/signIn', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await UserModel.findOne({ username, password });
//     if (!user) return res.status(401).json({ msg: 'Invalid credentials' });

//     const token = jwt.sign({ userId: user._id.toString() }, JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.status(200).json({ token });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// // ✅ AUTH MIDDLEWARE – Looks for Authorization: Bearer <token>
// app.use((req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ msg: 'No token provided' });
//     }

//     const token = authHeader.split(' ')[1];
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.userId = decoded.userId;
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: 'Invalid token' });
//   }
// });

// // ✅ CREATE TODO
// app.post('/todo', async (req, res) => {
//   try {
//     const { title, done } = req.body;
//     await TODOmODEL.create({ title, done, userID: req.userId });
//     res.status(201).json({ msg: 'TODO created' });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// // ✅ GET TODOS (for logged in user)
// app.get('/todos', async (req, res) => {
//   try {
//     const todos = await TODOmODEL.find({ userID: req.userId });
//     res.status(200).json({ todos });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// app.listen(3000, () => {
//   console.log('✅ Server running on http://localhost:3000');
// });
