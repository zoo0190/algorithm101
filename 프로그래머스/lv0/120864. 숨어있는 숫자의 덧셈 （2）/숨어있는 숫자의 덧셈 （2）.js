function solution(my_string) {
    return my_string
        .replace(/[a-z]/gi, ' ')
        .replace(/ +/g, ' ')
        .trim()
        .split(' ')
        .reduce((acc, cur) => acc += +cur, 0)
}