
import fs from 'fs/promises'

const db = './tasks.json'

export const readTasks = async (req, res) => {
    const data = await fs.readFile(db, 'utf-8')
    const tasks = JSON.parse(data)

    res.send({
        success: true,
        tasks: tasks
    })
}



//http://localhost:3001/api/tasks