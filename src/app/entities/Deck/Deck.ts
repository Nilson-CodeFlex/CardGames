import {Card} from '../card/card';

export class Deck{

    private _cards:Array<Card> = [];

    private _hasAce:boolean;

    constructor(){
    }

    addCard(card:Card){
        this._cards.push(card);
        if(card.Ion === 'Ace'){
            this._hasAce = true;
        }
    }

    addCards(newCards:Array<Card>){
        newCards.forEach(card => {
            this.addCard(card);
        });
    }

    size():number{
        return this._cards.length;
    }

    totalSum():Array<number>{
        let minSum:number = 0;
        let maxSum:number = 9999;
        this._cards.forEach(card =>
            minSum += card.numValue()
        );
        if(this._hasAce){
            maxSum = minSum + 10;
            return [minSum, maxSum]
        }                               //minSum considering ace = 1 or no ace, maxSum considering ace = 11
        else{
            return [minSum]
        }
    }

    get cards(){
        return this._cards;
    }
}
