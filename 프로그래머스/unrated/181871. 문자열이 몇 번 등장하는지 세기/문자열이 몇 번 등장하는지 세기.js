function solution(myString, pat) {
    var answer = 0;
    for(let i = 0; i <= myString.length - pat.length; i += 1) {
        if(myString.slice(i, i + pat.length) === pat) answer += 1
    }
    return answer;
}