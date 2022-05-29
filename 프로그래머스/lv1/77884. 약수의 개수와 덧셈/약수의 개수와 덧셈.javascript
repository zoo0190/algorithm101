function solution(left, right) {
    const onePlusArr = (startNum, EndNum) => {
        return [...Array(EndNum - startNum + 1).keys()].map(key => key + startNum)
  }
  
  let result = 0
  const arr = onePlusArr(left, right)
  arr.forEach((item) => {
    let num = 0
    const sqrt = Math.floor(Math.sqrt(item))
    const checkPrime = onePlusArr(1, sqrt)
    checkPrime.forEach((e) => {
      if (item / e === e) return num ++
      if (item % e === 0) num = num + 2
    })
    num % 2 === 0 ? result = result + item : result = result - item
  })
  return result
}