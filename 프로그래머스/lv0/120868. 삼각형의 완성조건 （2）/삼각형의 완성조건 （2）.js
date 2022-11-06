function solution(sides) {
    var answer = 0;
    const [val1, val2] = sides
    
    const minVal = Math.abs(val2 - val1) + 1
    const maxVal = val2 + val1
    
    return maxVal - minVal;
}