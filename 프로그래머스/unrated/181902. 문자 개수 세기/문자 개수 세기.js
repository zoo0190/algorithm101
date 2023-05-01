function solution(my_string) {
    var answer = Array(52).fill(0)
    const obj = my_string.split('').reduce((acc, cur) => {
        if(acc[cur]) {
            acc[cur] += 1
        } else {
            acc[cur] = 1
        }
        return acc
    }, {})
    Object.keys(obj).forEach((v) => {
        if(v.charCodeAt(0) >= 65 && v.charCodeAt(0) <= 90) {
            answer[v.charCodeAt(0) - 65] = obj[v]
        } else {
            answer[v.charCodeAt(0) - 71] = obj[v]
        }
    })
    return answer;
}