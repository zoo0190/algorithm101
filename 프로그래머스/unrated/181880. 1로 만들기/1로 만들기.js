function solution(num_list) {
    var answer = 0;
    
    function recur(n, times = 0)  {
        if(n === 1) return times
        if(n % 2 === 0) {
            return recur(n / 2, times += 1)
        } 
        if(n % 2 === 1) {
            return recur((n - 1) / 2, times += 1)
        }       
    }
    
    for(const v of num_list) {
        answer += recur(v)
    }
    
    return answer;
}