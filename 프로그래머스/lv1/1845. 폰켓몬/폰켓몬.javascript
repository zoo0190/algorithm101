function solution(nums) {
  var answer = 0;
  let arr = []
  const obj = nums.reduce((acc, cur) => {
    acc[cur] = ++acc[cur] || 1
    return acc
  }, {})
  const objToArr = Object.entries(obj).sort((a, b) => b[1]-a[1])
  const choose = nums.length / 2

  if (Object.keys(obj).length < choose) {
    answer = Object.keys(obj).length
  } else {
     for(let i = 0; i < choose; i++) {
      arr.push(objToArr[i][0])
    }
    answer = arr.length
  }
  return answer;
}