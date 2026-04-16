const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

// connecting to the database
mongoose.connect('mongodb://127.0.0.1:27017/test')

// creating routes
// 1.get 
app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// 2.put/update
app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndUpdate(
        {_id: id}, 
        [{$set: {done: {$not: "$done"}}}],
        {updatePipeline: true}  // add this
    )
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// 3.post
app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then (result => res.json(result))
    .catch(err => res.json(err))
})

// 4. delete 
app.delete('/delete/:id' , (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then (result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3006, () => {
    console.log('Server is running!')
})