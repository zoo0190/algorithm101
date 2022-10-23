function solution(my_string) {
    var answer = '';
    for(let i of my_string) {
        if(i.toLowerCase() === i) {
            answer += i.toUpperCase()
        } else {
            answer += i.toLowerCase()
        }
    }
    return answer;
}