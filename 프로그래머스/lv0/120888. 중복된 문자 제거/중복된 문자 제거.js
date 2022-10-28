function solution(my_string) {
    var answer = '';
    const dedu = new Set(my_string)
    return [...dedu].join('');
}