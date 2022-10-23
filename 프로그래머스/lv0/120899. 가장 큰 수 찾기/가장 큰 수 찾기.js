function solution(array) {
    const maxNum = Math.max(...array)
    const idx = array.indexOf(maxNum)
    return [maxNum, idx];
}