
import express from 'express'
import fs from 'fs/promises'
import { readTasks } from './helperFunction.js'

const app = express()
const db = './tasks.json'
const PORT = 3001

app.use(express.json())

// GET - Read all tasks
app.get('/api/tasks', readTasks)

// POST - Create a new task
app.post('/api/tasks', async (req, res) => {
    const { title, deadline } = req.body

    const data = await fs.readFile(db, 'utf-8')
    const tasks = JSON.parse(data)

    const newTask = {
        id: Date.now(),
        title,
        deadline
    }

    tasks.push(newTask)

    await fs.writeFile(db, JSON.stringify(tasks, null, 4))

    res.send({
        success: true,
        task: newTask
    })
})

// PUT - Update a task
app.put('/api/tasks/:id', async (req, res) => {
    const id = Number(req.params.id)

    const data = await fs.readFile(db, 'utf-8')
    const tasks = JSON.parse(data)

    const index = tasks.findIndex(task => task.id === id)

    if (index === -1) {
        return res.status(404).send({
            success: false,
            message: 'Task not found'
        })
    }

    tasks[index].title = req.body.title
    tasks[index].deadline = req.body.deadline

    await fs.writeFile(db, JSON.stringify(tasks, null, 4))

    res.send({
        success: true,
        task: tasks[index]
    })
})

// DELETE - Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
    const id = Number(req.params.id)

    const data = await fs.readFile(db, 'utf-8')
    const tasks = JSON.parse(data)

    const filteredTasks = tasks.filter(task => task.id !== id)

    if (filteredTasks.length === tasks.length) {
        return res.status(404).send({
            success: false,
            message: 'Task not found'
        })
    }

    await fs.writeFile(db, JSON.stringify(filteredTasks, null, 4))

    res.send({
        success: true,
        tasks: filteredTasks
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})


//http://localhost:3001/api/tasks
