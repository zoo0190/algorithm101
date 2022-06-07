function solution(priorities, location) {
  var answer = 0
  while (true) {
    let maxNum = Math.max(...priorities)
    let currentNum = priorities[0]
    if (maxNum === currentNum) {
      priorities.shift()
      answer++
      if (location === 0) {
        break
      }
      location--
    } else {
      const value = priorities.shift()
      priorities.push(value)
      if(location === 0) {
        location = priorities.length - 1
      } else {
        location--
      }
    }
  }
  return answer;
}