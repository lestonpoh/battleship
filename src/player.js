import { Gameboard } from "./gameboard";

const Player = (name)=>{
    let gameBoard = Gameboard()

    const attack = (player,x,y)=>{
        return player.gameBoard.receiveAttack(x,y)

    }

    const randomAttack = (player)=>{
       
        while (true){
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
            if (player.gameBoard.board[y][x] ===  "empty" ||
            player.gameBoard.board[y][x].hit === false) {
                
                return {x,y,hit:player.gameBoard.receiveAttack(x,y)}
            }
            
        
        }
    }

    const populateShip1 = ()=>{
        gameBoard.placeShip(2,2,2)
        gameBoard.placeShip(3,3,2)
        gameBoard.placeShip(2,5,4)
        gameBoard.placeShip(3,7,4)
    }

    const populateShip2 = ()=>{
        gameBoard.placeShip(0,2,2)
        gameBoard.placeShip(3,5,2)
        gameBoard.placeShip(2,9,4)
        gameBoard.placeShip(3,6,4)
    }



    return {
        name,
        gameBoard,
        attack,
        randomAttack,
        populateShip1,
        populateShip2
    }
}

export {Player}