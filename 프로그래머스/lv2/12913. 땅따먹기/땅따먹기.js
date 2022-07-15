function solution(land) {
  let answer = 0;
  const range = Array(land.length).fill(0).map((_, idx) => idx)
  const startNum = Array(land[0].length).fill(0).map((_, idx) => idx)
  
  for (let j of range) {
    if (j + 1 === land.length) break
    for (let i of startNum) {
      const filterValue = land[j].filter((_, idx) => i !== idx)
      const maxValue = Math.max(...filterValue)
      land[j+1][i] += maxValue
    }
  }
  
  answer = Math.max(...land[land.length - 1])
  
  return answer;
}