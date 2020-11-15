import GameEngine from "./GameEngine"

let engine = new GameEngine()
while(!engine.isWon()){
    engine.play()
}

console.log(`${engine.currentPlayer.name} won! with round = ${engine.round}`)
