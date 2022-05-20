function solution(s) {
  let answer = ''
  let num = 1
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      num = 0
    }
    if (num % 2 !== 0) {
      answer = answer + s[i].toUpperCase()
      num = num + 1
    } else {
      answer = answer + s[i].toLowerCase()
      num = num + 1
    }
  }
  return answer
}