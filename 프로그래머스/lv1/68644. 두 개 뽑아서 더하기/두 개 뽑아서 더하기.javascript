function solution(numbers) {
  let answer = []
  for (let i = 0; i < numbers.length -1; i++) {
    for (let a = 1 + i; a < numbers.length ; a++) {
      const sum = numbers[i] + numbers[a]
      if (!answer.includes(sum)) {
        answer.push(sum)
      }
    }
  }
  answer.sort((a,b) => {
    return a-b;
  })
  return answer
}