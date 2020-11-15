import DiceBox from "./DiceBox";
import Player from "./Player";

export const FINISH_POS = 100

export default class GameEngine {
    db = new DiceBox()
    p1 = new Player("p1")
    p2 = new Player("p2")

    currentPlayer: Player
    round = 0

    constructor(){
        this.currentPlayer = this.p1
    }

    private nextPlayer(){
        this.currentPlayer = this.currentPlayer == this.p1 ? this.p2 : this.p1
    }

    play(){
        if(this.currentPlayer == this.p1)
            this.round++
                    
        this.currentPlayer.play(this.db)
        this.nextPlayer()        
    }

    isWon() : boolean {
        return this.currentPlayer.currentPos >= FINISH_POS
    }
}