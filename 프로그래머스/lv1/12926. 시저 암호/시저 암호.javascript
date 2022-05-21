function solution (s, n) {
  var answer = ''
  for (let i = 0; i < s.length; i++) {
    const toNum = s.charCodeAt(i)
    if (toNum === 32) {
      answer = answer + String.fromCharCode(toNum)
    }
    if (toNum >= 65 && toNum <= 90) {
      if (toNum + n > 90) {
        answer = answer + String.fromCharCode(toNum + n - 26)
      } else {
        answer = answer + String.fromCharCode(toNum + n)
      }  
    }
    if (toNum >= 97 && toNum <= 122) {
      if (toNum + n > 122) {
        answer = answer + String.fromCharCode(toNum + n - 26)
      } else {
        answer = answer + String.fromCharCode(toNum + n)
      }
    }
  }
  return answer
}