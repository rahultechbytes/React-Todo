const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todos = new Schema({
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
});

const todoModel = mongoose.model('todos', todos);

module.exports = todoModel;