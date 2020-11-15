import Dice from "./Dice"

export default class DiceBox {
    d1 = new Dice()
    d2 = new Dice()

    roll(){
        this.d1.roll()
        this.d2.roll()
    }

    isCombo() : boolean {
        return this.d1.face == this.d2.face
    }

    getScore(): number {
        return this.d1.face + this.d2.face
    }
}