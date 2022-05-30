function solution(n, lost, reserve) {
  var answer = 0;
  const result = []
  for (let i = 0; i < n; i++) {
    result.push(1)
  }
  lost.forEach((value) => result[value-1]--)
  reserve.forEach((value) => result[value-1]++)
  result.forEach((value, idx) => {
    if (value === 0 && result[idx-1] === 2) {
      result[idx]++
      result[idx-1]--
    } else if (value === 0 && result[idx+1] === 2) {
      result[idx]++
      result[idx+1]--
    }
  })
  answer = result.filter((value) => {
    return value !== 0
  })
  return answer.length
}