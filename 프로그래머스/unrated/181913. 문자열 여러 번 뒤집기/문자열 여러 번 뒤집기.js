function solution(my_string, queries) {
    for(const [x, y] of queries) {
        my_string = my_string.slice(0, x) + my_string.slice(x, y + 1).split('').reverse().join('') + my_string.slice(y + 1)
    }
    return my_string;
}