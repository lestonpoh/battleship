const Ship = (length) => {

    let hitCount = 0

    const hit = () => {
        hitCount+=1
    }

    const isSunk = () =>{
        if (hitCount >= length){
            return true
        }else{
            return false
        }
    }

    return {length, hit, isSunk }
}

export {Ship}
