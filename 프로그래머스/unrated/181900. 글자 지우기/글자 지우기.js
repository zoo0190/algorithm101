function solution(my_string, indices) {
    var answer = '';
    const arr = my_string.split('')
    indices.forEach((v) => {
        arr[v] = '0'
    })
    return arr.filter((v) => v !== '0').join('');
}