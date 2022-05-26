function solution(price, money, count) {
    let answer = -1
    let num = 0
    for (let i = 1; i <= count; i++) {
        num += i
    }
    answer = money - price * num
    answer < 0 ? answer = Math.abs(answer) : answer = 0
    return answer
}