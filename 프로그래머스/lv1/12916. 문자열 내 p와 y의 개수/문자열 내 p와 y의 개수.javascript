function solution(s){
  const lowerCase = s.toLowerCase()
  const strObj = lowerCase.split('').reduce((acc, crr) => {
    acc[crr] = acc[crr] + 1 || 1
    return acc
  }, {})
  if (!strObj.y && !strObj.p) {
    return true
  } else {
    return strObj.y === strObj.p ? true : false
  }
}