function solution(t, p) {
    var answer = 0;
    
    for (let i = 0; i <= t.length - p.length; i++) {
        const val = t.slice(i, i + p.length)
        if(+val <= +p) answer += 1
    }
    
    return answer;
}