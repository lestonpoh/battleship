import { Gameboard } from "./gameboard";

const Player = (name)=>{
    let gameBoard = Gameboard()

    const attack = (player,x,y)=>{
        return player.gameBoard.receiveAttack(x,y)

    }

    const randomAttack = (player)=>{
        let attackSuccess = false
        
        while (attackSuccess === false){
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
            if (player.gameBoard.board[y][x] ===  "empty" ||
            player.gameBoard.board[y][x].hit === false) {
                player.gameBoard.receiveAttack(x,y)
                attackSuccess = true   
            }
            
        }
    }

    const populateShip = ()=>{
        gameBoard.placeShip(2,2,2)
        // gameBoard.placeShip(3,3,2)
        // gameBoard.placeShip(2,5,4)
        // gameBoard.placeShip(3,7,4)
    }

    return {
        name,
        gameBoard,
        attack,
        randomAttack,
        populateShip
    }
}

export {Player}