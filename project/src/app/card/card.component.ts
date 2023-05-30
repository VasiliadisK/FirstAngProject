import { Component, Injectable, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ICardItem } from '../models/card-item-model';
import {ModalServiceService} from '../services/modal-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})

@Injectable()
export class CardComponent implements OnInit{

  @Input() cardItem: ICardItem;

  constructor(private Service:ModalServiceService) {}
  
  
  ngOnInit(): void {
   
  }

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


  addTask(day:string){
    this.Service.openModalClicked();
    this.Service.selectedDay.next(day);

  }

  Delete(Task: any){
    
    for(let i=0;i<this.cardItem.toDo.length;i++){
      if(this.cardItem.toDo[i].task == Task)
        this.cardItem.toDo = this.cardItem.toDo.filter(t => t !==  this.cardItem.toDo[i]);
    }
  }
  
  
  
}
