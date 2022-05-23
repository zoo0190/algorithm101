function solution(s) {
  var answer = ''
  const arr = []
  for (let i = 0; i < s.length; i++) {
    arr.push(s.charCodeAt(i))
  }
  const result = arr.sort((a,b) => b-a).map((value) => {
    return String.fromCharCode(value)
  })
  answer = result.join('')
  return answer
}