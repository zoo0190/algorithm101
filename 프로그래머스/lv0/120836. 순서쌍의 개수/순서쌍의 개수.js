function solution(n) {
    var answer = 0;
    const sqrt = Math.sqrt(n)
    const checkNum = parseInt(sqrt)
    
    for (let num = 1; num <= checkNum; num++) {
        if (n % num === 0) answer += 1
    }
    return sqrt % 1 === 0 ? (answer * 2) - 1 : answer * 2
}