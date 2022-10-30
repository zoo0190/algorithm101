function solution(numbers) {
    var answer = 0;
    numbers.sort((a, b) => a - b)
    
    const val1 = numbers[0] * numbers[1]
    const val2 = numbers[numbers.length - 1] * numbers[numbers.length - 2]
    return val1 > val2 ? val1 : val2;
}