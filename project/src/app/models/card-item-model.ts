export interface ICardItem {
    day:string;
    toDo:Task[];
}

export interface Task{
    task:string
    isDone: boolean
}
