function solution(my_string) {
    var answer = '';
    return my_string.toLowerCase().split('').sort().join('');
}