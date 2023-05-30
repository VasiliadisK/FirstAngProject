import { Component, OnInit } from '@angular/core';
import { ICardItem } from './models/card-item-model';
import { MockCards } from './models/card-item-mock';
import { ModalServiceService } from './services/modal-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  show:string;
  showModal:boolean;
  start:number = 0;
  end:number = 7;
  cardItems: ICardItem[];

  constructor(private Service:ModalServiceService){

  }
  ngOnInit(): void {
      
    this.Service.openModal.subscribe(result => {
      this.showModal = result;
    })
    this.Service.cardItems.subscribe(result => {
      this.cardItems = result;

    })
    

  }

  nextWeek(){

    this.start +=7;
    this.end +=7;
  }

  prevWeek(){
    this.start -=7;
    this.end -=7
  }

  saveTasks(){
    
    localStorage.setItem(`Tasks`,JSON.stringify(this.cardItems));      

  }

  
  
}