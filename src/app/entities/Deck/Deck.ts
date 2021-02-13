import {Card} from '../card/card';

export class Deck{

    private _cards:Array<Card>;

    private _hasAce:boolean;

    constructor(){
        this._cards = [];
        this._hasAce = false;
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
        let maxSum:number;
        this._cards.forEach(card =>
            minSum += card.numValue()
        );
        if(this._hasAce){
            maxSum = minSum + 10;
            if( minSum == 21 || maxSum == 21 ) return [21]
            else if(maxSum>21 && minSum<21) return [minSum]
            else if( minSum < 21 && maxSum < 21) return [minSum, maxSum]
            else if(minSum > 21) return [minSum]
        }   //minSum considering ace = 1 or no ace, maxSum considering ace = 11
        else{
            return [minSum]
        }
    }

    

    get cards(){
        return this._cards;
    }
}
