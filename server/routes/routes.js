const express = require('express');
const router = express.Router();
const todoOperations = require('../db/services/todoOperations');

router.post('/', (req, res) => {
    const todoData = req.body;
    todoOperations.createTodo(todoData).then((data) => {
        console.log("add todo", data);
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    })

});

router.get('/', (req, res) => {
    todoOperations.getTodos().then((data) => {
        console.log("get data", data);
        res.send(data);
    }).catch((err) => {
        res.status(400).send(err);
    })
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    todoOperations.deleteTodos(id).then((data) => {
        console.log("deleted todo", data);
        res.send(data);
    }).catch((err) => {
        res.status(400).send(err);
    })
})

router.patch('/:id', (req, res) => {
    let id = req.params.id;
    let description = req.body.description;
    todoOperations.updateTodos(id, description).then((data) => {
        console.log("updated data", data);
        res.send(data);
    }).catch(err => {
        res.status(400).send(err);
    });
})

module.exports = router;