const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
  username: String,
  password: String,
  email: String,
});

const TODO = new Schema({
  title: String,
  done: Boolean,
  userID: ObjectId,
});

const UserModel = mongoose.model('users', User);
const TODOmODEL = mongoose.model('todo', TODO);

module.exports = {
  UserModel,
  TODOmODEL,
};

// db.js
// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   email: String, // ✅ Lowercase, consistent
// });

// const TodoSchema = new mongoose.Schema({
//   title: String,
//   done: Boolean,
//   userID: mongoose.Schema.Types.ObjectId,
// });

// const UserModel = mongoose.model('users', UserSchema);
// const TODOmODEL = mongoose.model('todos', TodoSchema); // ✅ use plural for clarity

// module.exports = {
//   UserModel,
//   TODOmODEL,
// };
