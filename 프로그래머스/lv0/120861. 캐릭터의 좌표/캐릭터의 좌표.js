function solution(keyinput, board) {
    const sP = [0, 0]
    const xR = parseInt(board[0] / 2)
    const yR = parseInt(board[1] / 2)
    
    keyinput.forEach((item) => {
        if(item === 'left' && sP[0] > -xR) sP[0] -= 1
        if(item === 'right' && sP[0] < xR) sP[0] += 1
        if(item === 'up' && sP[1] < yR) sP[1] += 1
        if(item === 'down' && sP[1] > -yR) sP[1] -= 1
    })

    return sP
}