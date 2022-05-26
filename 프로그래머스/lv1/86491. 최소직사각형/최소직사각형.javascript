function solution(sizes) {
  let compareMaxNum = 0
  const flat = sizes.flatMap((x) => x)
  const largestNum = Math.max(...flat)
  sizes.forEach((item) => {
    const smallerNum = Math.min(...item)
    if (smallerNum > compareMaxNum) compareMaxNum = smallerNum
  })
  return largestNum * compareMaxNum
}