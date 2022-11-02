function solution(n) {
    var answer = [];
    let divisor = 2
    
    while(true) {
        if(n % divisor === 0) {
            answer.push(divisor)
            n = n / divisor
            divisor = 2
        } else {
            divisor += 1
        }
        if (n <= divisor) {
            answer.push(divisor)
            break
        }
    }
    
    const dedu = new Set(answer)
    
    return [...dedu];
}