import {Card} from '../card/card';

export class Deck{

    private _cards:Array<Card>;

    private _hasAce:boolean;

    constructor(){
    }

    addCard(card:Card){
        this._cards.push(card);
        if(card.Ion === 'A'){
            this._hasAce = true;
        }
    }

    size():number{
        return this._cards.length;
    }

    totalSum():Array<number>{
        let minSum:number = 0;
        let maxSum:number = 0;
        this._cards.forEach(card =>
            minSum += card.numValue()
        );
        if(this._hasAce){
            maxSum = minSum + 10;
        }
        return [minSum, maxSum]; //minSum considering ace = 1 or no ace, maxSum considering ace = 11
    }
}
