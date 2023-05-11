import { Component, OnInit } from '@angular/core';
import { ICardItem } from './models/card-item-model';
import { MockCards } from './models/card-item-mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  start:number = 0;
  end:number = 7;
  cardItems: ICardItem[] = MockCards;

  nextWeek(){

    this.start +=7;
    this.end +=7;
  }

  prevWeek(){
    this.start -=7;
    this.end -=7
  }

}

