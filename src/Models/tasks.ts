export interface Itask {
    id:number 
    tarefa: string,
    data_inicio: string,
    status: 'completa' | 'incompleta'
}