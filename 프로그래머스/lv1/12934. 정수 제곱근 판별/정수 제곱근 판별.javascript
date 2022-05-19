function solution(n) {
  const root = Math.sqrt(n)
  if (root === Math.floor(root)) {
    return (root + 1) * (root + 1)
  } else {
    return -1
  }
}