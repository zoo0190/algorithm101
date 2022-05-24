function solution(a, b) {
  let answer = 0;
  if (a === b) {
    return answer = a
  }
  
  if (a < b) {
    for (let i = a; a <= b; a++) {
      answer = answer + a
    }
    return answer
  }
  
  if (b < a) {
    for (let i = b; b <= a; b++) {
      answer = answer + b
    }
    return answer
  }
}