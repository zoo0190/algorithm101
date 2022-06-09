function solution(citations) {
  var answer = 0;
  citations.sort((a, b) => b - a)
  citations.forEach((value, idx) => {

    if (value >= idx+1) {
      answer = idx+1
    }
  })
  return answer
}