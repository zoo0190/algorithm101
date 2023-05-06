function solution(strArr) {
    var answer = [];
    strArr.forEach((v, i) => {
        if(i % 2 === 0) answer.push(v.toLowerCase())
        else answer.push(v.toUpperCase())
    })
    return answer;
}