import express from 'express'
import TaskController from './src/Controllers/tasksControlles'


const router = express()
const taskController = new TaskController()

router.post('/tasks', taskController.postNewTask)
router.get('/tasks', taskController.getAllTasks)
router.put('/tasks', taskController.updateTaskById)
router.delete('/tasks', taskController.deleteTaskById)


export default router