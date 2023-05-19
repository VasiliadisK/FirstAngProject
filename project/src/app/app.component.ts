import { Component, OnInit } from '@angular/core';
import { ICardItem } from './models/card-item-model';
import { MockCards } from './models/card-item-mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  start:number = 0;
  end:number = 7;
  cardItems: ICardItem[];


  ngOnInit(): void {
      
    this.cardItems = localStorage.getItem(`Tasks`) ? JSON.parse(localStorage.getItem(`Tasks`)!) : MockCards;     

    
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