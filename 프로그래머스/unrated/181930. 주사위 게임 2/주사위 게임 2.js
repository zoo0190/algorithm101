function solution(a, b, c) {
    var answer = 0;
    
    if(a === b && b === c && c === a) {
        const z = a + b + c
        const y = a ** 2 + b ** 2 + c ** 2
        const x = a ** 3 + b ** 3 + c ** 3
        return z * y * x
    }
    
    if(a !== b && b !== c && c !== a) {
        return a + b + c
    }
    
    answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2)
    
    
    return answer;
}