function solution(n) {
  let answer = 0
  let result = []
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i)
    }
  }
  answer = result.reduce((acc, crr) => {
    return acc + crr
  }, 0)
  return answer
}