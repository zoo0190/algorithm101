function solution(n) {
  const answer = n.toString().split('').sort((a,b) => b-a).join('')
  const result = parseInt(answer)
  return result
}