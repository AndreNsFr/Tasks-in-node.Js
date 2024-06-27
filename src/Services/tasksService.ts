
import { Itask } from "../Models/tasks"
import TasksRepostiry from "../Repository/taskRepository"



const taskRepository = new TasksRepostiry

class TaskService{
    constructor(){

    }

    getAllTasks(){
        return taskRepository.getAllTasks()
    }

    postNewTask(data:Itask){
        return taskRepository.postNewTask(data)
    }

    updateTaskById(dados:Itask , Pos: number){
        return taskRepository.updateTaskById(dados, Pos)
    }

    deleteTaskById(Id:number){
        return taskRepository.deleteTaskById(Id)
    }


}

export default TaskService