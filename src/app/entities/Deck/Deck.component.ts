import { Component, OnInit } from '@angular/core';
import { Card } from '../Card/Card';

@Component({
  selector: 'app-Deck',
  templateUrl: './Deck.component.html',
  styleUrls: ['./Deck.component.css']
})
export class DeckComponent implements OnInit {

  constructor() { }

  cards:Array<Card> = [
    new Card('10', 'S'),
    new Card('J', 'H')
  ];

  ngOnInit() {
  }

}
