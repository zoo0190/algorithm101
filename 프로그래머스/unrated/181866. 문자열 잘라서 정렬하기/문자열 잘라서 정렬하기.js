function solution(myString) {
    return myString.split('x').filter((v) => v).sort((a, b) => a.localeCompare(b))
}