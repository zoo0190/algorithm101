function solution(numbers) {
    const answer = 45 - numbers.reduce((acc, cur) => acc + cur, 0)
    return answer
}