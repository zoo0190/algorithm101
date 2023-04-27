function solution(numLog) {
    var answer = '';
    for(let i = 0; i < numLog.length - 1; i++) {
        const val = numLog[i + 1] - numLog[i]
        if(val === 1) answer += 'w'
        if(val === -1) answer += 's'
        if(val === 10) answer += 'd'
        if(val === -10) answer += 'a'
    }
    return answer;
}