function solution(myString) {
    var answer = [];
    myString.split('x').forEach((v) => {
        answer.push(v.length)
    })
    return answer;
}