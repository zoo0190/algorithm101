function solution(array) {
    var answer = 0;
    array.sort((a, b) => b - a)

    return array[parseInt(array.length / 2)];
}