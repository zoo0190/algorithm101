function solution(i, j, k) {
    let result = 0
    var answer = '';
    for (let start = i; start <= j; start++) {
        answer += start
    }
    
    for (let count of answer) {
        if (count === String(k)) result += 1
    }
    return result;
}