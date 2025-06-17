// Assignment - 1

const express = require('express');
const { read } = require('fs');
const app = express();
const fs = require('fs').promises;
const path = require('path');
app.use(express.json());
app.listen(3000);

// Task - 1
app.get('/files', (req, res) => {
  async function getfiles() {
    try {
      let files = await fs.readdir('.');
      res.status(200).send(JSON.stringify(files, null, 2));
    } catch (err) {
      res.status(400).send({
        error: 'Not able to read the file ',
      });
    }
  }
  getfiles();
});

// Task 2

app.get('/file/:filename', (req, res) => {
  let filename = req.params.filename;

  async function readcontent() {
    try {
      let content = await fs.readFile(filename, 'utf-8');
      res.status(200).send(content);
    } catch (err) {
      res.status(400).send({
        error: 'Not able to read the file ',
      });
    }
  }

  readcontent();
});
