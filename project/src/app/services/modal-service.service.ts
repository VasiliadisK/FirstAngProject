import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICardItem } from '../models/card-item-model';
import { MockCards } from '../models/card-item-mock';


@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor() { }

  openModal:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  selectedDay:BehaviorSubject<string> = new BehaviorSubject<string>('');
  cardItems:BehaviorSubject<ICardItem[]> = new BehaviorSubject<ICardItem[]>(localStorage.getItem(`Tasks`) ? JSON.parse(localStorage.getItem(`Tasks`)!) : MockCards);

  addTaskToDay(input:string){

    this.cardItems.value.map(cI => {
if (cI.day === this.selectedDay.value) cI.toDo.push({task: input, isDone: false})
    })
    this.closeModalClicked();
  }

  openModalClicked(){
    this.openModal.next(true);
    
  }

  closeModalClicked(){
    this.openModal.next(false);

  }
  
  
}
