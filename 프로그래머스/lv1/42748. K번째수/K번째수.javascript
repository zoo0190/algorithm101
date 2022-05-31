function solution(array, commands) {
  let answer = []
  for (let i in commands) {
    const newArr = array.slice(commands[i][0] - 1, commands[i][1]).sort((a,b) => a-b)
    answer.push(newArr[commands[i][2] - 1])
  }
  return answer
}