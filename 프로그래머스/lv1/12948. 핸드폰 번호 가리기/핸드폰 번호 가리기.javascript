function solution(phone_number) {
  var answer = []
  for (let i = 1; i <= phone_number.length-4; i++) {
    answer.push("*")
  }
  const lastFour = phone_number.split('').splice(-4)
  return answer.concat(lastFour).join('')
}