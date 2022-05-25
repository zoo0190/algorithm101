function solution(dartResult) {
  var answer = 0;
  const result = []
  const toArr = dartResult.split('')
  toArr.forEach((value, idx) => {
    let number = Number(toArr[idx-1])
    if (number === 0 && Number(toArr[idx-2]) === 1) {
      number = 10
    }
    if (value === 'S') {
      if (toArr[idx+1] === '*') {
        result.push(Math.pow(number, 1) * 2)
        result[result.length - 2] = result[result.length - 2] * 2
      } else if (toArr[idx+1] === '#') {
        result.push(Math.pow(number, 1) * -1)
      } else {
        result.push(Math.pow(number, 1))
      }
    }
    if (value === 'D') {
      if (toArr[idx+1] === '*') {
        result.push(Math.pow(number, 2) * 2)
        result[result.length - 2] = result[result.length - 2] * 2
      } else if (toArr[idx+1] === '#') {
        result.push(Math.pow(number, 2) * -1)
      } else {
        result.push(Math.pow(number, 2))
      }
    }
    if (value === 'T') {
      if (toArr[idx+1] === '*') {
        result.push(Math.pow(number, 3) * 2)
        result[result.length - 2] = result[result.length - 2] * 2
      } else if (toArr[idx+1] === '#') {
        result.push(Math.pow(number, 3) * -1)
      } else {
        result.push(Math.pow(number, 3))
      }
    }
  })
  answer = result.reduce((acc, cur) => {
    return acc + cur
  }, 0)
  return answer
}