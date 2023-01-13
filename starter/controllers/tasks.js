const getAllTasks = (req, res) => {
    res.send('Here are the tasks from controller')
}

const createTasks = (req, res) => {
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
