function solution(numbers) {
    const answer = numbers.reduce((acc, cur) => {
        acc += cur
        return acc
    }, 0)
    return answer / numbers.length
}