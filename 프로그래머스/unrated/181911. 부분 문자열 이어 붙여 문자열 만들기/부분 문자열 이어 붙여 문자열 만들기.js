function solution(my_strings, parts) {
    var answer = '';
    my_strings.forEach((v, i) => {
        const [s, e] = parts[i]
        answer += v.slice(s, e + 1)
    })
    return answer;
}