function solution(my_string, is_suffix) {
    var answer = 0;
    const arr = []
    for(let i = -1; i >= -my_string.length; i--) {
        arr.push(my_string.slice(i))
    }
    return arr.includes(is_suffix) ? 1 : 0;
}