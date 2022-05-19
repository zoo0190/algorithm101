function solution(arr) {
  let answer = []
  if (arr.length === 1) {
    answer.push(-1)
    return answer
  }
  const copyArr = [...arr]
  const minNum = copyArr.sort((a,b) => b - a).pop()
  answer = arr.filter((value) => value !== minNum)
  return answer
}