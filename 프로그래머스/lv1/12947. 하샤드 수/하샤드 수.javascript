function solution(x) {
  let sum = 0
  x.toString().split('').forEach((value) => sum = sum + parseInt(value))
  return x % sum === 0 ? true : false
}