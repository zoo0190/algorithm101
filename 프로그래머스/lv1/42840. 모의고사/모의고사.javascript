function solution(answers) {
  var answer = []
  const mathHaterOne = [1, 2, 3, 4, 5]
  const mathHaterTwo = [2, 1, 2, 3, 2, 4, 2, 5]
  const mathHaterThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  const score = [0, 0, 0]
  
  for (let i = 0; i < answers.length; i++) {
    if (mathHaterOne[i % 5] === answers[i]) {
      score[0]++
    }
  }
  
  for (let i = 0; i < answers.length; i++) {
    if (mathHaterTwo[i % 8] === answers[i]) {
      score[1]++
    }
  }
  
  for (let i = 0; i < answers.length; i++) {
    if (mathHaterThree[i % 10] === answers[i]) {
      score[2]++
    }
  }
  
  const result = score.map((el, i) => {
    return {i, el}
  })
  result.forEach((value) => {
    if(Math.max(...score) === value.el) {
      answer.push(value.i + 1)
    }
  })
  return answer
}