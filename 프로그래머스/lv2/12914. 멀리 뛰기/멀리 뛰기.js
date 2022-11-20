function solution(n) {
    const memo = {
        1: 1,
        2: 2
    }
    
    if(n === 1) return 1
    if(n === 2) return 2
    
    for (let i = 3; i <= n; i++) {
        memo[i] = (memo[i - 1] + memo [i - 2]) % 1234567
    }
    
    return memo[n]
}
