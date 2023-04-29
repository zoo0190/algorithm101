function solution(x1, x2, x3, x4) {
    var answer = true;
    answer = (x1 || x2) && (x3 || x4)
    return answer;
}