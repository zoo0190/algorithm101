function solution(a, b) {
    const checkA = a % 2 === 0 ? true : false
    const checkB = b % 2 === 0 ? true : false
    if(!checkA && !checkB) return a ** 2 + b ** 2
    if(!checkA || !checkB) return 2 * (a + b)
    if(checkA && checkB) return Math.abs(a - b)
}