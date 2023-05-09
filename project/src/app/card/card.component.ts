import { Component, Input, OnInit } from '@angular/core';
import { ICardItem } from '../models/card-item-model';

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

}