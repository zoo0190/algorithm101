function solution(nums) {
  var answer = 0
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k])
      }
    }
  }
  
  arr.forEach((value) => {
    let i = 3
    if (value % 2 === 0) {
      return
    }
    
    const sqrt = Math.sqrt(value)
    
    while (i <= sqrt) {
      if (value % i === 0) {
        return
      } else {
        i = i + 2
      }
    }
    answer++
  })
  return answer
}