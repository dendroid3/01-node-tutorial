const express = require('express')
const app = express()
const port = 3000
const tasks_routes = require('./routes/tasks')

//middleware
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.status(200).send('Task Manager App')
})

app.use('/api/v1/tasks', tasks_routes)

app.listen(port, () => {
    console.log(`Listening on port ${port}....`)
})
