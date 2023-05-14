function solution(str_list, ex) {
    var answer = '';
    str_list.forEach((v) => {
        if(!v.includes(ex)) answer += v
    })
    return answer;
}