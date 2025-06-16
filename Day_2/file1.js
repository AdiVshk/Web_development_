const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000);

let todo_data = [];

app.get('/todos', (req, res) => {
  res.send(todo_data).status(200);
});

app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  const todo = todo_data.find((value) => value.id == id); // Use == to match string/number

  if (!todo) {
    return res.status(404).send('❌ Todo not found');
  }

  res.send(todo); // Return the single matched todo
});

app.post('/todos', (req, res) => {
  function random_no() {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  }
  let body = { ...req.body };

  let alreadyexists = todo_data.some((value) => value.title === body.title);

  if (alreadyexists) {
    res.send('Not allowed !!!');
  } else {
    body.id = random_no();
    todo_data.push(body);
  }

  res.send('added');
});

app.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const todo = todo_data.find((value) => value.id == id);

  if (!todo) {
    return res.status(404).send('404 Not Found ❌');
  }

  // Update the todo
  todo.title = body.title;
  todo.description = body.description;
  todo.completed = body.completed;

  res.send('Updated ✅');
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todo_data.findIndex((todo) => todo.id == id);

  if (index === -1) {
    return res.status(404).send('❌ Todo not found');
  }

  todo_data.splice(index, 1);
  res.send('✅ Deleted successfully');
});
