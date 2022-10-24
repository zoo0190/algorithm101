function solution(order) {
    var answer = 0;
    order.toString().split('').forEach((item) => {
        if(item === '3' || item === '6' || item === '9') answer += 1
    })
    return answer;
}