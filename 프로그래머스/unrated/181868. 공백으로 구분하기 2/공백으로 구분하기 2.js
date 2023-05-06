function solution(my_string) {
    var answer = [];
    const res = my_string.trim().split(' ')
    for(const val of res) {
        if(val.length) answer.push(val)
    }
    return answer;
}