function solution(my_string) {
    var answer = [];
    const regVal = my_string.replace(/[a-z]/gi, '')
    return regVal.split('').map(Number).sort((a, b) => a - b);
}