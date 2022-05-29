function solution(n) {
  let result = 0
  let arr = []
  while (true){
    if (n === 2) {
      arr.push(2)
      break
    }
    if (n === 1) {
      arr.push(1)
      break
    }
    arr.push(n % 3)
    n = parseInt(n / 3)
  }

  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i] * Math.pow(3, arr.length - 1 - i)
  }
  return result
}