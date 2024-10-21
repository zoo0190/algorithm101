function solution(numbers) {
  const result = Array(numbers.length).fill(-1); 
  const stack = []; 

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[i] > numbers[stack[stack.length - 1]]) {
      const index = stack.pop(); 
      result[index] = numbers[i]; 
    }
    stack.push(i);
  }

  return result;
}