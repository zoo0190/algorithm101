function solution(intStrs, k, s, l) {
    var answer = [];
    for(const num of intStrs) {
        const val = +num.slice(s, s + l)
        if(k < val) {
            answer.push(val)
        }
    }
    return answer;
}