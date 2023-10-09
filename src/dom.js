
const renderBoards = (p1,p2)=>{
    hidePopUp()
    const boards = document.querySelector(".boards")
    boards.innerHTML = ""
    const playerOneBoard = document.createElement("div")
    playerOneBoard.classList = "board"
    playerOneBoard.setAttribute("id","playerOneBoard")
    boards.appendChild(playerOneBoard)
    const playerTwoBoard = document.createElement("div")
    playerTwoBoard.classList = "board"
    playerTwoBoard.setAttribute("id","playerTwoBoard")
    boards.appendChild(playerTwoBoard)

    p1.gameBoard.board.forEach((row,rowId)=>{
        row.forEach((e,columnId)=>{
            const square = document.createElement("div")
            square.classList = "square"
            square.setAttribute("id",`${columnId},${rowId}`)
            playerOneBoard.appendChild(square)
        })
    })

    p2.gameBoard.board.forEach((row,rowId)=>{
        row.forEach((e,columnId)=>{
            const square = document.createElement("div")
            square.classList = "square hover"
            square.setAttribute("id",`${columnId},${rowId},player2`)
            playerTwoBoard.appendChild(square)

            square.addEventListener("click",squareOnClick)

            function squareOnClick(e){
                const squareId = e.target.id
                const x = squareId.split(",")[0]
                const y = squareId.split(",")[1]
                if (p1.attack(p2,x,y)){
                    e.target.classList.add("hit")
                    hitShip(p1,p2,x,y)
                }else{
                    e.target.classList.add("missed")
                    
                }
                console.log(p2.gameBoard.board)
                e.target.classList.remove("hover")
                e.target.removeEventListener("click",squareOnClick)
                
                // p2.randomAttack(p1)
            }
        })
    })
}

const hitShip = (attackingPlayer,player,x,y)=>{
    let shipX = player.gameBoard.board[y][x].x
    let shipY = player.gameBoard.board[y][x].y
    
    // if one ship is sunk
    if (player.gameBoard.board[shipY][shipX].ship.isSunk()){
        player.gameBoard.board[shipY][shipX].shipPositions.forEach((e)=>{
            const sunkSquares = document.getElementById(`${e},player2`)
            sunkSquares.classList.add("sunk")
        })
    }

    // if all ship are sunk
    if (player.gameBoard.areAllSunk()){
        showPopup(attackingPlayer)
    }


}

const showPopup = (winner)=>{
    const overlay =  document.querySelector(".overlay")
    overlay.style.display = "revert"
    const popUp = document.querySelector(".restart-popup")
    document.querySelector(".winner").textContent = `${winner.name} WIN!`
    popUp.style.visibility = "visible"
}

const hidePopUp = ()=>{
    const overlay =  document.querySelector(".overlay")
    overlay.style.display = "none"
    const popUp = document.querySelector(".restart-popup")
    document.querySelector(".winner").textContent = ""
    popUp.style.visibility = "hide"

}


export {renderBoards}