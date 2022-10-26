function solution(n) {
    var answer = 1;
    
    const factorial = (num) => {
        if (num === 1) return 1
        return num * factorial(num - 1)
    }
    
    while(true) {
        if(factorial(answer) > n) break
        answer += 1
    }
    return answer - 1;
}