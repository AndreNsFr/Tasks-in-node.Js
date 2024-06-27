import  { Request, Response } from "express"
import { Itask } from "../Models/tasks"
import TaskService from "../Services/tasksService"
import TasksRepostiry from "../Repository/taskRepository"



const taskService = new TaskService
const tasksStorage = new TasksRepostiry


class TaskController {

    constructor(){

    }

    
    getAllTasks(Req: Request, Res: Response){
        
        Res.json(taskService.getAllTasks())
        
    }

    postNewTask(Req: Request, Res: Response){
        
        
        const {tarefa , data_inicio , status , id}:Itask = Req.body
        
        if(tarefa && data_inicio && status && id){
            Res.send(taskService.postNewTask(Req.body))
        }else{
            Res.status(400)
            Res.send("dados invalidos")
        }

    }

    updateTaskById(Req: Request, Res: Response){
        const Id = Number(Req.query.id)

        

        const {tarefa , data_inicio , status }= Req.body

        if (tarefa && data_inicio && status && Id){
            Res.status(200)
            Res.send(taskService.updateTaskById(Req.body, Id))
        } else{
            Res.status(400).json({Error: "os parametros estão errados"})
        }

        

    }

    deleteTaskById(Req: Request, Res: Response){
        const Id = Number(Req.query.id)
        if(Id){
            Res.send(taskService.deleteTaskById(Id))
        } else {
            Res.json({Error: "the parameters are missing"})
        }
    }

}

export default TaskController