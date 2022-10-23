function solution(s1, s2) {
    var answer = 0;
    for(let s of s1) {
        if(s2.includes(s)) answer += 1;
    }
    return answer;
}