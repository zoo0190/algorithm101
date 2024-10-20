function solution(elemets) {
  const result = []
  const range = Array.from({ length: elemets.length }, (_, i) => i + 1)
  const sum = (arr) => arr.reduce((ac, cr) => ac + cr, 0)

  range.forEach((v) => {
    if (elemets.length !== v) {
      const addElements = [...elemets, ...elemets.slice(0, v - 1)]
      elemets.forEach((_, i) => {
        result.push(sum(addElements.slice(i, i + v)))
      })
    } else {
      result.push(sum(elemets))
    }
  })

  return new Set(result).size
}
