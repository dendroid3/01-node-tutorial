const express = require('express')
const app = express()
const port = 3000
const connectDB = require('../starter/db/connect')
require('dotenv').config({ path: "./starter/.env" })

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.get('/', (req, res) => {
    res.status(200).send('Task Manager App')
})

const tasks_routes = require('./routes/tasks')

app.use('/api/v1/tasks', tasks_routes)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Listening on port ${port}....`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()

