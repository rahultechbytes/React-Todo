const todoModel = require('../models/todoSchema');

createTodo = (todoData) => {
    const todos = new todoModel({
        description: todoData.description
    });
    return todos.save();
}
getTodos = () => {
    return todoModel.find({}).sort({ $natural: -1 });
}

deleteTodos = (id) => {
    return todoModel.findByIdAndRemove({ _id: id });
}

updateTodos = (id, desc) => {
    return todoModel.findOneAndUpdate({ _id: id }, { $set: { description: desc } }, { new: true });
}

module.exports = {
    createTodo,
    getTodos,
    deleteTodos,
    updateTodos
}