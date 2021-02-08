import { Component, OnInit } from '@angular/core';
import { Card } from '../Card/Card';
import { Deck } from './Deck'
import { Dealer } from '../Dealer';
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
    let dealer = new Dealer()
    this.deck.addCards(dealer.giveCards(2));
  }

}
