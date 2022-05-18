function solution(n, m) {
  const arr = []
  let NumN = n
  let NumM = m
  let stand = 2
  let minNum = n < m ? n : m
  
  while (stand <= minNum) {
    if (NumN % stand === 0 && NumM % stand === 0) {
      arr.push(stand)
      NumN = parseInt(NumN / stand)
      NumM = parseInt(NumM / stand)
    } else {
      stand++
    }
  }
  
  if (arr.length === 0) {
    return [1, n*m]
  } else {
    const commonDivisor = arr.reduce((acc, cur) => {
      acc = acc * cur
      return acc
    }, 1)
    return [commonDivisor, commonDivisor * NumN * NumM]
  }
}