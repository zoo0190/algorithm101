function solution(dots) {
    var answer = 0;
    const a = (dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0])
    const b = (dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0])
    const c = (dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0])
    const d = (dots[1][1] - dots[2][1]) / (dots[1][0] - dots[2][0])
    const e = (dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0])
    const f = (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0])
    if(a === f || b === e || c === d) return 1
    return answer;
}