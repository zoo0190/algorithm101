function solution(n) {
  var answer = 0;
  const arr = []
  for (let i = 0; i < n+1; i++) {
    arr.push(true)
  }
  const sqrt = Math.sqrt(n)
  const floor = Math.floor(sqrt)
  for (let a = 2; a < floor + 1; a++) {
    if (arr[a] === true) {
      for (let b = a + a; b < n+1; b = b + a) {
        arr[b] = false
      }
    }
  }
  answer = arr.filter((value) => value).length -2
  return answer;
}