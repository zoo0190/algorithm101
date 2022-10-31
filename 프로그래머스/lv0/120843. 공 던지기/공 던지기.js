function solution(numbers, k) {
    const answer = (2 * k - 2) % numbers.length
    
    return numbers[answer];
}