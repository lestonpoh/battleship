import  { Ship } from "./ship"

const Gameboard = () => {

    const board = []
    for (let i=0;i<10;i++){
        board[i]=[]
        for (let j=0;j<10;j++){
            board[i].push("empty")
        }
    }

    const placeShip = (x,y,length) => {
        let ship = Ship(length)
        let shipPositions = []

        if (x+length >= 10) return false;

        for (let i=0;i<length;i++){
            if (board[y][x+i] !== "empty"){
                return false
            }
        }

        for (let i=x;i<x+length;i++){
            board[y][i] = {x,y,hit:false}
            shipPositions.push(`${i},${y}`)
        }
        board[y][x] = {ship,shipPositions, x, y, hit:false}
    }

    const receiveAttack = (x,y) => {
        if (board[y][x] === "empty"){
            board[y][x] = "miss"
            return false
        }else{
            let shipX = board[y][x].x
            let shipY = board[y][x].y
            board[shipY][shipX].ship.hit()
            board[y][x].hit = true
            return true
        }

    }

    const areAllSunk = ()=>{
        let allSunk = true
        for (let i=0;i<10;i++){
            board[i].forEach((square)=>{
                if (square === "empty" || square === "miss") return
                if (board[square.y][square.x].ship.isSunk() === false){
                    allSunk = false
                }
            })
            
        }
        return allSunk
    }


    return {
        board,
        placeShip,
        receiveAttack,
        areAllSunk
    }

}


export {Gameboard}

