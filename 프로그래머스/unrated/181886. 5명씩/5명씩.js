function solution(names) {
    var answer = [];
    for(let i = 0; i < names.length; i += 5) {
        answer.push(names[i])
    }
    return answer;
}