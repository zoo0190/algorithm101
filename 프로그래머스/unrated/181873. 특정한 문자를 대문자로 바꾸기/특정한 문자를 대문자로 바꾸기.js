function solution(my_string, alp) {
    var answer = '';
    for(const str of my_string) {
        if(str === alp) {
            answer += str.toUpperCase()
        } else {
            answer += str
        }
    }
    return answer;
}