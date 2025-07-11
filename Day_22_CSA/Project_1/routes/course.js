const { Router } = require('express');
const courseRouter = Router();

// Purchase a Course
courseRouter.post('/purchase', async function (req, res) {});

// Sees all the course
courseRouter.get('/preview', async function (req, res) {});

module.exports = {
  courseRouter: courseRouter,
};
