function solution(n) {
  let answer = ''
  let quotient = Math.floor(n / 3)
  let remainder = n % 3

  while (true) {
    if (remainder === 0) {
      quotient = quotient - 1
      remainder = 4
    }

    if (quotient === 0 && (remainder === 4 || remainder === 1 || remainder === 2)) {
      answer += String(remainder)
      answer += String(quotient)
      break
    }
    answer += String(remainder)
    remainder = quotient % 3
    quotient = Math.floor(quotient / 3)
  }

  return String(+answer.split('').reverse().join(''))
}
