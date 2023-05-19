import { Component, Input, OnInit } from '@angular/core';
import { ICardItem } from '../models/card-item-model';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardItem: ICardItem;

  constructor() {
  }
  
  ngOnInit(): void {}

  ToggleCheckUncheck(task:any){
    task.isDone = !task.isDone;    
  }

  isChecked(task:any){
    return task.isDone;
  }

  onCheckboxChange(e:any,task:any){
    let value  = e.target.checked;
    console.log(value);

    console.log(task);
  }


  addTask(){

    this.cardItem.toDo.push([{task: "",isDone:false}]);
   
  }

  Delete(Task: any){
    
    for(let i=0;i<this.cardItem.toDo.length;i++){
      if(this.cardItem.toDo[i].task == Task)
        this.cardItem.toDo = this.cardItem.toDo.filter(t => t !==  this.cardItem.toDo[i]);
    }
  }
  
}
