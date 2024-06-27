import { Itask } from "../Models/tasks";
import { Response } from "express";



class TasksRepostiry {
    
    tasksStorage: Itask[] 
    
    constructor(){
        
        this.tasksStorage = []

    }

    getAllTasks(){
        return this.tasksStorage
    }
    
    postNewTask(data:Itask){
        if(this.tasksStorage[data.id - 1] == undefined ){
            this.tasksStorage[data.id - 1] = data
            return 'Task sucessfully created'
        } else {
            return ''
        }
        
    }

    updateTaskById(data:Itask , id:number){
        if(this.tasksStorage[id - 1 ] != undefined){
            this.tasksStorage[id - 1 ] = data
            console.log("task alterada com sucesso")
            return {Status : "sucess"}
        } else {
            return {Error : "this task don't exist"}
        }
    }

    deleteTaskById(Id:number){
        delete this.tasksStorage[Id - 1]  
        return {Status: "successfully deleted"}
    }

}

export default TasksRepostiry