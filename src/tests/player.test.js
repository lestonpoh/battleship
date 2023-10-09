import { Player } from "../player";

test('attack',() => {
    let player1 = Player()
    let player2 = Player()

    player1.gameBoard.placeShip(2,2,3)
    player2.attack(player1,2,2)
    expect(player1.gameBoard.board[2][2].hit).toBe(true)

})

test('random attack',() => {
    let player1 = Player()
    let player2 = Player()

    for (let i=0;i<10;i++){
        for (let j=0;j<10;j++){
            player1.gameBoard.board[i][j] = "miss"
        }   
    }

    player1.gameBoard.board[5][5] = "empty"
    // player1.gameBoard.board[5][6] = "empty"
    player2.randomAttack(player1)
    expect(player1.gameBoard.board[5][5]).toBe("miss")
})

test('populate ship',() => {
    let player1 = Player()
    player1.populateShip()
    // console.log(player1.gameBoard.board)

})