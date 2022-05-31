function solution(participant, completion) {
    let answer = '';
  const participantObj = participant.reduce((acc, crr) => {
    acc[crr] = ++acc[crr] || 1
    return acc
  }, {})
  
  completion.forEach((value) => {
    return participantObj[value] = participantObj[value] - 1
  })
  
  const aa = Object.entries(participantObj).sort((a, b) => {
    return b[1] - a[1]
  })
  
  answer = aa[0][0]
  
  return answer
}