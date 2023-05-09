function solution(arr, k) {
    const answer = []
    const unique = [...new Set(arr)]
    for(let i = 0; i < k; i++) {
        answer.push(unique[i])
    }
    return answer.map((v) => v === undefined ? -1 : v);
}