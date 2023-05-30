import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor() { }

  openModal:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  taskToBeAdded:BehaviorSubject<string> = new BehaviorSubject<string>('');

  addTaskToDay(input:string){
    this.taskToBeAdded.next(input);
  }

  openModalClicked(){
    this.openModal.next(true);
    
  }

  closeModalClicked(){
    this.openModal.next(false);

  }
  
  
}
