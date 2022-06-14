function solution(s){
  const arr = []
  const toArr = s.split('')
  let left = 0
  let right = 0
  toArr.forEach((value) => {
    if (value === ")") {
      right++
    } else {
      left++
    }
  })
  if (left !== right) {
    return false
  } 
  while(toArr.length !== 0 ) {
    const last = toArr.pop()
    if (last === ")") {
      arr.push(last)
    } else {
      if (arr.length === 0) {
        return false
      } else {
        arr.pop()
      }
    }
  }
  return true
}