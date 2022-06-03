function solution(lottos, win_nums) {
let ranking
  let matchNum = 0
  let zeroNum = 0
  const exceptZero = lottos.filter((item) => item !== 0)
  zeroNum = 6 - exceptZero.length
  
  if (zeroNum === 6) return [1, 6]
  
  exceptZero.forEach((item) => {
    if (win_nums.includes(item)) matchNum++ 
  })
  
  if (matchNum === 0 || matchNum === 1) {
    return [6-zeroNum ,6]
  } else {
    return [7-matchNum-zeroNum, 7-matchNum]
  }
}