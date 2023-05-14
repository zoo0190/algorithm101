function solution(arr, k) {
    return k % 2 === 0 ? arr.map((v) => v + k) : arr.map((v) => v * k);
}