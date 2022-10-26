function solution(n) {
    var answer = [];
    const sqrt = Math.sqrt(n)
    const last = parseInt(sqrt)
    
    for(let num = 1; num <= last; num++) {
        if ((n % num) === 0) {
            answer.push(num)
            
            const intNum = parseInt(n / num)
            
            num !== intNum && answer.push(intNum)
            
        }
    }
    
    return answer.sort((a, b) => a - b);
}