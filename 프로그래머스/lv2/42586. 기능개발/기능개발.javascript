function solution(progresses, speeds) {
  var answer = [];
  const completionDay = []
  for (let i = 0; i < progresses.length; i++) {
    let days = 0
    while(true) {
      if (progresses[i] >= 100) {
        completionDay.push(days)
        break
      } else {
        days++
        progresses[i] = progresses[i] + speeds[i]
      }
    }
  }
  
  let num = 1
  let leftPop = completionDay.shift()
  while(completionDay.length !== 0) {
    if (leftPop < completionDay[0]) {
      answer.push(num)
      leftPop = completionDay[0]
      completionDay.shift()
      num = 1
    } else {
      completionDay.shift()
      num++
    }
  }
  answer.push(num)
  return answer;
}