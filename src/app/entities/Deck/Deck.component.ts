import { Component, OnInit } from '@angular/core';
import { Card } from '../Card/Card';
import { Deck } from './Deck'
import { dealer } from '../Dealer';
@Component({
  selector: 'app-Deck',
  templateUrl: './Deck.component.html',
  styleUrls: ['./Deck.component.css']
})
export class DeckComponent implements OnInit {

  constructor() { }

  deck:Deck;

  addCard(){
    this.deck.addCards(dealer.giveCards(1));
    console.log("Card added.")
  }

  checkButton():boolean{
    let sum = this.deck.totalSum();
    return sum[0]>=21
  }

  ngOnInit() {
    this.deck = new Deck();
    this.deck.addCards(dealer.giveCards(2));
  }

}
