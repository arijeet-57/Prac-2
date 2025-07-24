// here we will be creating the schemas for the db
const { default: mongoose, mongo } = require("mongoose");
const { string, boolean } = require("zod");

mongoose.connect("mongodb+srv://admin2:root@cluster57.achpbe2.mongodb.net/todo-app") //this is a secret and should be stored in .env (this is a demo project so we have put it here)

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}