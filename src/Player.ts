import DiceBox from "./DiceBox"

export default class Player {
    _pos = 0

    name: string

    get currentPos(): number{
        return this._pos
    }

    constructor(name: string){
        this.name = name
    }

    play(db: DiceBox){
        do{
            db.roll()
            this._pos += db.getScore()
        }while(db.isCombo())
    }

}