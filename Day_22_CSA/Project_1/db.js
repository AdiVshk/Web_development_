const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://AdiDataBase:YuQFkLBKVtVcoYdE@cluster0.g41lucs.mongodb.net/MyCourseApp'
);

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const Users = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const Creator = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
});

const Course = new Schema({
  title: String,
  description: String,
  price: Number,
  imageURL: String,
  CreatorID: ObjectId,
});

const Purchases = new Schema({
  courseID: ObjectId,
  userId: ObjectId,
});

const UsersModel = mongoose.model('users', Users);
const CreatorModel = mongoose.model('Creator', Creator);
const CourseModel = mongoose.model('course', Course);
const PurchasesModel = mongoose.model('purchases', Purchases);

module.exports = {
  UsersModel,
  CreatorModel,
  CourseModel,
  PurchasesModel,
};
