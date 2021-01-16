import { Component, OnInit } from '@angular/core';
import { Card } from '../Card/Card';
import { Deck } from './Deck'
@Component({
  selector: 'app-Deck',
  templateUrl: './Deck.component.html',
  styleUrls: ['./Deck.component.css']
})
export class DeckComponent implements OnInit {

  constructor() { }

  deck:Deck;

  ngOnInit() {
    this.deck = new Deck();
    this.deck.addCard(new Card("10", "S"));
    this.deck.addCard(new Card("A", "H"));
  }

}
