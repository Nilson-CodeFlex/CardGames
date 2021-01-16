export class Card {
    private _Ion: String;//Letters or numbers
    private _figure: String;//Diamonds, Hearts, 

    constructor(Ion: String, figure: String) {
        this.Ion = Ion;
        this._figure = figure;
    }

    get Ion() {
        if( isNaN(+this._Ion)){
            if(this._Ion === "J"){
                return "Jack";
            }
            else if (this._Ion === "K"){ 
                return "King";
            }
            else{
                return "Queen";
            }
        }
        return this._Ion;
    }

    set Ion(Ion: String) {
        this._Ion = Ion;
    }

    get Figure() {
        if(this._figure === "S") return "spades"
        else if( this._figure === "C") return "clubs"
        else if(this._figure === "H") return "hearts"
        else return "diamonds"
    }

    set Figure(figure: String) {
        this._figure = figure;
    }

    getColor(){
        if(this.Figure === "spades" || this.Figure === "clubs"){
            return "black";
        }
        else{
            return "red";
        }
    }

    numValue(): number {
        let value = 0;
        
        if (this._Ion === "A") {
            value = 1;
        } else if (this._Ion === "J" || this._Ion === "Q" || this._Ion === "K") {
            value = 10;

        } else {
            value = +this._Ion;
        }

        return value;
    }



    toString():string{
        return  this.Ion + " of " + this.Figure;
    }

}