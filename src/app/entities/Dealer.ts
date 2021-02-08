import {Card} from './Card/Card';
import {Deck} from './Deck/Deck';

export class Dealer {

    wholeDeck:Array<Card> = [
        new Card("1", "S"),
        new Card("2", "S"),
        new Card("3", "S"),
        new Card("4", "S"),
        new Card("5", "S"),
        new Card("6", "S"),
        new Card("7", "S"),
        new Card("8", "S"),
        new Card("9", "S"),
        new Card("J", "S"),
        new Card("Q", "S"),
        new Card("K", "S"),
        new Card("A", "S"),
        new Card("1", "C"),
        new Card("2", "C"),
        new Card("3", "C"),
        new Card("4", "C"),
        new Card("5", "C"),
        new Card("6", "C"),
        new Card("7", "C"),
        new Card("8", "C"),
        new Card("9", "C"),
        new Card("J", "C"),
        new Card("Q", "C"),
        new Card("K", "C"),
        new Card("A", "C"),
        new Card("1", "H"),
        new Card("2", "H"),
        new Card("3", "H"),
        new Card("4", "H"),
        new Card("5", "H"),
        new Card("6", "H"),
        new Card("7", "H"),
        new Card("8", "H"),
        new Card("9", "H"),
        new Card("J", "H"),
        new Card("Q", "H"),
        new Card("K", "H"),
        new Card("A", "H"),
        new Card("1", "D"),
        new Card("2", "D"),
        new Card("3", "D"),
        new Card("4", "D"),
        new Card("5", "D"),
        new Card("6", "D"),
        new Card("7", "D"),
        new Card("8", "D"),
        new Card("9", "D"),
        new Card("J", "D"),
        new Card("Q", "D"),
        new Card("K", "D"),
        new Card("A", "D"),
    ]

    constructor(){
        this.shuffleWholeDeck()
    }

    shuffleWholeDeck():void{
        for (let i = this.wholeDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.wholeDeck[i], this.wholeDeck[j]] = [this.wholeDeck[j], this.wholeDeck[i]];
        }
    }

    giveCards(amt:number):Array<Card>{
        let returnMe:Array<Card> = [];
        for( let i=0; i<amt; i++){
            returnMe.push(this.wholeDeck.shift())
        }
        return returnMe;
    }

}
