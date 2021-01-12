import {Card} from '../card/card';

export class Deck{

    cards:Array<Card>;

    constructor(card:Card){
        this.cards.push(card);
    }

    addCard(card:Card){
        this.cards.push(card);
    }

    size():number{
        return this.cards.length;
    }

    totalSum():number{
        return this.cards.reduce(card => {
            return card.getIon();
        })
    }
}
