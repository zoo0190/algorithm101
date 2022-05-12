function solution(arr) {
  var answer = 0;
  answer = arr.reduce((arr, crr) => {
    return arr + crr
  }, 0)
  answer = answer / arr.length
  return answer
}