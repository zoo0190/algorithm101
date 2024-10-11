function solution(n, m, section) {
  const area = []
  const reverseSection = [...section].reverse()
  let reverseLastSection = reverseSection.pop()

  for (let i = 1; i <= n; i++) {
    if (i === reverseLastSection) {
      area.push(0)
      reverseLastSection = reverseSection.pop()
    } else {
      area.push(1)
    }
  }
    
  const result = area.reduce((ac, cr, i) => {
    if (cr) {
      return ac
    }
    const lastSection = (n - 1 > m + i - 1) ? m + i - 1 : n - 1
    for (let j = i; j <= lastSection; j++) {
      area[j] = 1
    }
    ac += 1
    return ac
  }, 0)
  return result
}