function solution(cacheSize, cities) {
  if (!cacheSize) {
    return cities.length * 5
  }

  let result = 0
  const cacheMap = new Map()

  cities.map((v) => v.toLowerCase()).forEach((val) => {
    if (cacheMap.has(val)) {
      result += 1
      cacheMap.delete(val)
      const keys = [...cacheMap.keys()]
      cacheMap.clear()
      keys.forEach((v) => {
        cacheMap.set(v, true)
      })
      cacheMap.set(val, true)
    } else {
      result += 5
      if (cacheMap.size < cacheSize) {
        cacheMap.set(val, true)
      } else {
        const firstKey = cacheMap.keys().next().value
        cacheMap.delete(firstKey)
        cacheMap.set(val, true)
      }

    }
  })

  return result
}
