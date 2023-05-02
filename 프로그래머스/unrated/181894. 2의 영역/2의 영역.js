function solution(arr) {
    var answer = [];
    arr.forEach((v, i) => {
        if(v === 2) {
            answer.push(i)
        }
    })
    if(answer.length === 0) return [-1]
    if(answer.length === 1) return [2]
    
    const res = []
    for(let idx = 0; idx < answer.length - 1; idx++) {
        res.push(...arr.slice(answer[idx], answer[idx + 1]))
    }
    return [...res, 2];
}