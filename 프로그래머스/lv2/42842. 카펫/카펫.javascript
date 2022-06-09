function solution(brown, yellow) {
  const sum = brown + yellow
  const sqrt = Math.sqrt(yellow)
  
  const num = Math.floor(sqrt)
  const rangeArr = Array(num).fill(0).map((_, idx) => idx + 1)
  
  for (let i of rangeArr) {
    if (yellow % i === 0) {
      const width = parseInt(yellow / i)
      const height = i
      if (sum === (width + 2) * (height + 2)) return [width + 2, height + 2]
    }
  }
}