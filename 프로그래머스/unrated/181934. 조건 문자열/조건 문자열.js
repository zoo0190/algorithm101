function solution(ineq, eq, n, m) { 
    if(ineq === '>' && eq === '=') {
        return n >= m ? 1 : 0
    }
    
    if(ineq === '<' && eq === '=') {
        return n <= m ? 1 : 0
    }
    
    if(ineq === '>' && eq === '!') {
        return n > m ? 1 : 0
    }
    
    if(ineq === '<' && eq === '!') {
        return n < m ? 1 : 0
    }
}