/* Question. Create a todo on your own HTTP server:
1.) Where you can perform the CRUD Operations
2.) Store the data of todos in json file example - todo.json
 */

// Day-2 (Week - 4) Assignment

const express = require('express');
const fs = require('fs').promises;
const { json } = require('stream/consumers');
const app = express();
app.use(express.json());
app.listen(2000, () => {
  console.log('express is live on port 2000');
});

function random_no() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

// Get
app.get('/todos', (req, res) => {
  async function getTodo() {
    try {
      let data = await fs.readFile('todo.json', 'utf-8');
      res.status(200).send(JSON.parse(data));
    } catch (error) {
      res.status(404).send({ error: 'Not able to read the file' });
    }
  }
  getTodo();
});

// Post
app.post('/todos', (req, res) => {
  async function post_todos() {
    try {
      let newtodos = req.body;

      let parse = JSON.parse(await fs.readFile('todo.json', 'utf-8'));
      let alreadyexist = parse.some((value) => value.title == newtodos.title);
      if (alreadyexist) {
        return res.status(200).send('Title with same value not allowed !!');
      }
      newtodos.id = random_no();
      parse.push(newtodos);
      await fs.writeFile('todo.json', JSON.stringify(parse, null, 2), 'utf-8');
      res.status(200).send('Content added succesfully');
    } catch (error) {
      res
        .status(404)
        .send({ error: 'Not able to add the content to the file' });
    }
  }
  post_todos();
});

// PUT(update);

app.put('/todos/:id', (req, res) => {
  async function updateData() {
    try {
      let id = req.params.id;
      let updated_data = req.body;
      let parseData = JSON.parse(await fs.readFile('todo.json', 'utf-8'));
      parseData.find((value) => {
        if (value.id == id) {
          value.title = updated_data.title;
          value.completed = updated_data.completed;
        }
      });
      await fs.writeFile('todo.json', JSON.stringify(parseData), 'utf-8');
      res.status(200).send('Data Updated Successfully');
    } catch (error) {
      res.status(500).send('Something Went Wrong IDK 😔');
    }
  }
  updateData();
});

// Delete

app.delete('/todos/:id', (req, res) => {
  async function DeleteData() {
    try {
      let id = req.params.id;
      let todo = JSON.parse(await fs.readFile('todo.json', 'utf-8'));
      let index = todo.findIndex((value) => value.id == id);
      if (index == -1) {
        return res.status(404).send('invalid input');
      }
      todo.splice(index, 1);
      await fs.writeFile('todo.json', JSON.stringify(todo), 'utf-8');
      res.status(200).send('TODO deleted !!');
    } catch (error) {
      res.status(500).send('Something went Wrong Brutally !! 💀');
    }
  }
  DeleteData();
});
