import { Game } from "./game"

const renderBoards = (p1,p2)=>{
    const restartButton = document.querySelector("#restart")
    restartButton.addEventListener("click",()=>{
        hideRestartPopUp()
        Game()
    })
    const boards = document.querySelector(".boards")
    boards.innerHTML = ""
    const playerOneBoard = document.createElement("div")
    playerOneBoard.classList = "board"
    playerOneBoard.setAttribute("id","playerOneBoard")
    playerOneBoard.innerHTML = `<p>${p1.name}</p>`
    boards.appendChild(playerOneBoard)
    const playerTwoBoard = document.createElement("div")
    playerTwoBoard.classList = "board"
    playerTwoBoard.setAttribute("id","playerTwoBoard")
    playerTwoBoard.innerHTML = `<p>${p2.name}</p>`
    boards.appendChild(playerTwoBoard)

    p1.gameBoard.board.forEach((row,rowId)=>{
        row.forEach((e,columnId)=>{
            const square = document.createElement("div")
            square.classList = "square"
            square.setAttribute("id",`${columnId},${rowId},${p1.name}`)
            playerOneBoard.appendChild(square)

            if (e !== "empty"){
                square.classList.add("ship")

            }
        })
    })

    p2.gameBoard.board.forEach((row,rowId)=>{
        row.forEach((e,columnId)=>{
            const square = document.createElement("div")
            square.classList = "square hover"
            square.setAttribute("id",`${columnId},${rowId},${p2.name}`)
            playerTwoBoard.appendChild(square)

            square.addEventListener("click",squareOnClick)

            function squareOnClick(e){
                const squareId = e.target.id
                let x = squareId.split(",")[0]
                let y = squareId.split(",")[1]
                if (p1.attack(p2,x,y)){
                    e.target.classList.add("hit")
                    hitShip(p1,p2,x,y)
                }else{
                    e.target.classList.add("missed")
                    
                }

                e.target.classList.remove("hover")
                e.target.removeEventListener("click",squareOnClick)
                
                // p2 attack
                const attackStatus = p2.randomAttack(p1)
                x = attackStatus.x
                y = attackStatus.y
                let hit = attackStatus.hit
                const playerOneSquare = document.getElementById(`${x},${y},${p1.name}`)

                if (hit){
                    playerOneSquare.classList.add("hit")
                    hitShip(p2,p1,x,y)

                }else{
                    playerOneSquare.classList.add("missed")
                }
                
            }
        })
    })
}

const hitShip = (attackingPlayer,attackedPlayer,x,y)=>{
    let shipX = attackedPlayer.gameBoard.board[y][x].x
    let shipY = attackedPlayer.gameBoard.board[y][x].y
    
    // if one ship is sunk
    if (attackedPlayer.gameBoard.board[shipY][shipX].ship.isSunk()){
        attackedPlayer.gameBoard.board[shipY][shipX].shipPositions.forEach((e)=>{
            const sunkSquares = document.getElementById(`${e},${attackedPlayer.name}`)
            sunkSquares.classList.add("sunk")
        })
    }

    // if all ship are sunk
    if (attackedPlayer.gameBoard.areAllSunk()){
        showRestartPopup(attackingPlayer)
    }


}

const showRestartPopup = (winner)=>{
    const overlay =  document.querySelector(".overlay")
    overlay.style.display = "revert"
    const popUp = document.querySelector(".restart-popup")
    document.querySelector(".winner").textContent = `${winner.name} WIN!`
    popUp.style.visibility = "visible"
}

const hideRestartPopUp = ()=>{
    const overlay =  document.querySelector(".overlay")
    overlay.style.display = "none"
    const popUp = document.querySelector(".restart-popup")
    document.querySelector(".winner").textContent = ""
    popUp.style.visibility = "hidden"

}





export {renderBoards}