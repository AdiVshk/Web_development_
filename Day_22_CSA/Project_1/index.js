const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');

const JWT_secret = 'qwerty12345';
const port = 3000;
const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/admin', adminRouter);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
