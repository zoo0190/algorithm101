function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] < b[n]) {
      return -1
    } else if (a[n] === b[n]) {
      return (a > b) - (a < b)
    }
  })
  return strings
}