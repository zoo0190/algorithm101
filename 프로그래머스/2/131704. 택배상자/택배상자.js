function solution(order) {
  let answer = 0
  const stack = []
  const initBoxes = [...order].sort((a, b) => a - b)
  const reverseBoxes = [...order].reverse()

  for (const box of initBoxes) {
    if (box !== reverseBoxes[reverseBoxes.length - 1]) {
      if (stack.length > 0 && box === stack[stack.length - 1]) {
        stack.pop()
        reverseBoxes.pop()
        answer += 1
      } else {
        stack.push(box)
      }
    } else {
      reverseBoxes.pop()
      answer += 1
    }

    while (stack.length > 0 && (stack[stack.length - 1] === reverseBoxes[reverseBoxes.length - 1])) {
      answer += 1
      stack.pop()
      reverseBoxes.pop()
    }
  }

  return answer
}
