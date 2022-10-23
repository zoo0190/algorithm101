function solution(money) {
    const num = parseInt(money / 5500)
    return [num, money - 5500 * num];
}