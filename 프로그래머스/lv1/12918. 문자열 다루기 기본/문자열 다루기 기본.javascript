function solution(s) {
  const length = s.length
  if (length === 4 || length === 6) {
    const strToArr = s.split('')
    for (let i of strToArr) {
      if(!Number(i) && Number(i) !== 0) {
        return false
      }
    }
  } else {
    return false
  }
  return true
}