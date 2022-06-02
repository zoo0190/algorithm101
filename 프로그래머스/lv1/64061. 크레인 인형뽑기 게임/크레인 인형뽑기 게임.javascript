function solution(board, moves) {
  var answer = 0
  let arr = []
  for (let i of moves) {
    for (let j = 0; j < board[0].length; j++) {
      if(board[j][i-1] !== 0) {
        if (arr[arr.length - 1] === board[j][i-1]) {
          arr.pop()
          answer += 2
          board[j][i-1] = 0
          break
        } else {
          arr.push(board[j][i-1])
          board[j][i-1] = 0
          break
        }
      }     
    }   
  }
  return answer
}