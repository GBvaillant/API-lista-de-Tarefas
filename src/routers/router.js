const express = require('express')
const Task = require('../models/Tasks')
const app = express()



app.post('/task', async (req, res) => {
    try {
        const newTask = await Task.create({
            text: req.body.text,
            category: req.body.category,
            complete: req.body.complete
        })
        res.status(201).json(newTask)
        console.log('task criada')
    }
    catch (err) {
        res.status(500).send(err.message)
    }
});

app.get('/task', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(210).json(tasks)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
});

app.delete('/task/:id', async (req, res) => {
    try {
        const id = req.params.id
        await Task.findByIdAndRemove(id)
        res.status(201).json(`Task "${req.body.text}" foi deletada`)
        console.log('task deletada')
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})

module.exports = app