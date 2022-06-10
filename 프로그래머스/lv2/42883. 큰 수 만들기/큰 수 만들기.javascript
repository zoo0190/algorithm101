function solution(number, k) {
  var answer = '';
  const stack = []
  for (let i = 0; i < number.length; i++) {
    let value = number[i]
    while (k > 0 && stack[stack.length - 1] < value) {
      stack.pop()
      k--
    }
    stack.push(value)
  }  
  stack.splice(stack.length-k, k)
  answer = stack.join('')
  return answer;
}