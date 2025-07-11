const { Router } = require('express');
const userRouter = Router();
const { default: mongoose } = require('mongoose');
const { UsersModel } = require('../db');

// SignUP
userRouter.post('/SignUp', async function (req, res) {
  let { email, password, firstName, lastName } = req.body;

  await UsersModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });

  res.status(200).json({ msg: 'SignUp endpoint' });
});

// SignIn
userRouter.post('/SignIn', async function (req, res) {});

// Sees all the Purchased course
userRouter.get('/purchases', async function (req, res) {});

module.exports = {
  userRouter: userRouter,
};
