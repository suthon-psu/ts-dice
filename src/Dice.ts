export default class Dice {
    face: number = 0

    constructor(){
        this.roll()
    }

    roll(){
        this.face = Math.ceil((Math.random() * 6))
    }
}