function solution(s) {
  const result = s.split('},{')
    .map((item) => item.replace(/[{}]/gi, ''))
    .map((item) => item.split(','))
    .sort((a, b) => a.length - b.length)
    .flat()
  const deduplication = new Set(result)
  const answer = [...deduplication].map((value) => +value)
  return answer
}