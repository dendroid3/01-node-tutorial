const Task = require('../models/task')
// use(express.json())

const getAllTasks = (req, res) => {
    res.send('Here are the tasks from controller')
}

const createTasks = async (req, res) => {
    // const task = await
    // Task.create(req.body)
    console.log(req.body)
    res.json(req.body)
}

const getTask = (req, res) => {
    res.send('get single task')
}

const updateTask = (req, res) => {
    res.send('update Task')
}

const deleteTask = (req, res) => {
    res.send('delete Task')
}

module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask
}
