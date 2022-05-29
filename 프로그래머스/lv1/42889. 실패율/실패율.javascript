function solution(N, stages) {
  var answer = []
  const stage = []
  const failRate = {}
  for (let i = 1; i <= N; i++) {
    stage.push(i)
  }
  for (let i of stage) {
    const stageArrival = stages.filter((value) => {
      return value >= i
    })
    const notClear = stages.filter((value) => {
      return value === i
    })
    failRate[i] = notClear.length / stageArrival.length
  }
  const sort = Object.entries(failRate).sort((a, b) => {
    return b[1] - a[1]
  })
  for (let i of sort) {
    answer.push(Number(i[0]))
  }

  return answer;
}