export class Card {
    private _Ion: String;//Letters or numbers
    private _figure: String;//Diamonds, Hearts, 
    private _color: String;

    constructor(Ion: String, figure: String, color: String) {
        this.Ion = Ion;
        this._color = color;
        this._figure = figure;
    }

    get Ion() {
        return this.Ion;
    }

    set Ion(Ion: String) {
        this.Ion = Ion;

    }

    get Figure() {
        return this._figure;
    }

    set Figure(figure: String) {
        this._figure = figure;

    }
    get Color() {
        return this._color;
    }

    set Color(color: String) {
        this._color = color;

    }

    numValue():number{
        return 0;
    }
    
}