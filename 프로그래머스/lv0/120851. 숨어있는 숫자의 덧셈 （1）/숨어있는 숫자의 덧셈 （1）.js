function solution(my_string) {
    const regExp = my_string.replace(/[a-z]/gi, '')
    return regExp.split('').reduce((acc, cur) => acc += +cur ,0);
}