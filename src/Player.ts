import DiceBox from "./DiceBox"

export default class Player {
    currentPos = 0
    name: string

    constructor(name: string){
        this.name = name
    }

    play(db: DiceBox){
        do{
            db.roll()
            this.currentPos += db.getScore()
        }while(db.isCombo())
    }
}