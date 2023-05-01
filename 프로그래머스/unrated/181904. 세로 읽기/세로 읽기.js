function solution(my_string, m, c) {
    var answer = '';
    const arr = []
    const oneRowNum = my_string.length / m
    for(let i = 0; i < oneRowNum; i++ ) {
        arr.push(my_string.slice(i * m, (i + 1) * m))
    }
    arr.forEach((v) => {
        answer += v[c - 1]
    })
    return answer;
}