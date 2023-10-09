import { Player } from "./player";
import { renderBoards } from "./dom";

const Game = ()=>{
    const p1 = Player("Player 1")
    const p2 = Player("Player 2")

    p1.populateShip1()
    p2.populateShip2()
    
    renderBoards(p1,p2)
}

export { Game }