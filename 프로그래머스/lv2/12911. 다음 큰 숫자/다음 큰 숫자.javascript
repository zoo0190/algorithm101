function solution(n) {
  var answer = 0
  const binaryNum = n.toString(2).split('').filter((value) => value === "1").length
  let nextNum = n + 1
  let nextNumBinary = null
  while (true) {
    nextNumBinary = nextNum.toString(2).split('').filter((value) => value === "1").length
    ++nextNum
    if (nextNumBinary === binaryNum) {
      nextNum--
      break
    }
  }
  answer = nextNum
  return answer
}