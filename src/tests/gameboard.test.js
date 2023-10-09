import { Gameboard } from "../gameboard"

test("create 10x10 gameboard", ()=>{
    let gameBoard = Gameboard()
    expect(gameBoard.board.length && gameBoard.board[0].length).toBe(10)
})

test("place ship", ()=>{
    let gameBoard = Gameboard()
    gameBoard.placeShip(2,2,3)
    expect(gameBoard.board[3][2]).toBe("empty")
    expect(gameBoard.board[2][1]).toBe("empty")
    expect(gameBoard.board[2][2]).toBeTruthy()
    expect(gameBoard.board[2][3]).toBeTruthy()
    expect(gameBoard.board[2][4]).toBeTruthy()
    expect(gameBoard.board[2][5]).toBe("empty")
})

test("received attack", ()=>{
    let gameBoard = Gameboard()
    gameBoard.placeShip(2,2,3)
    gameBoard.receiveAttack(4,2)
    gameBoard.receiveAttack(3,2)
    gameBoard.receiveAttack(2,2)
    expect(gameBoard.board[2][2].ship.isSunk()).toBe(true)
})

test("all ship sunk?", ()=>{
    let gameBoard = Gameboard()
    gameBoard.placeShip(2,2,3)
    gameBoard.placeShip(7,7,2)
    gameBoard.receiveAttack(4,2)
    gameBoard.receiveAttack(3,2)
    gameBoard.receiveAttack(2,2)
    gameBoard.receiveAttack(7,7)
    gameBoard.receiveAttack(8,7)
    expect(gameBoard.areAllSunk()).toBe(true)
})