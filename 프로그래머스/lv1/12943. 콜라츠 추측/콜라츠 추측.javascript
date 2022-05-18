function solution(num) {
  var answer = 0;
  var result = num
  while (result !== 1 && answer < 500) {
    if (result % 2 === 0) {
        result = parseInt(result / 2)
        answer = answer + 1
    } else {
        result = result * 3 + 1
        answer = answer + 1
      }
    }
  if(answer === 500) {
    answer = -1
  }
  return answer
}