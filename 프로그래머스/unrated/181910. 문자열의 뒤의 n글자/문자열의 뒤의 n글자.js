function solution(my_string, n) {
    var answer = '';
    const val = my_string.length - n
    answer = my_string.slice(val)
    return answer;
}