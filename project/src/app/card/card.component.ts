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
}