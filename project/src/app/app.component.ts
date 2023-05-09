import { Component, OnInit } from '@angular/core';
import { ICardItem } from './models/card-item-model';
import { MockCards } from './models/card-item-mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  cardItems: ICardItem[] = MockCards;
}