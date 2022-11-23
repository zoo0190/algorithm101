function solution(k, dungeons) {
    var answer = 0;
    const bf = permutation(dungeons, dungeons.length)
    
    for(let arr of bf) {
        let kk = k
        let time = 0
        for (let [essen, consum] of arr) {
            if(essen > kk) {
                break
            }
            kk -= consum
            time += 1
            if(arr.length === time) return time
        }
        answer = time > answer ? time : answer
    }

    return answer;
}

const permutation = (arr, num) => {
    const result = []
    if(num === 1) return arr.map((item) => [item])
    
    arr.forEach((val, idx, origin) => {
        const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)]
        const recurResult = permutation(rest, num - 1)
        const attach = recurResult.map((recurVal) => [val, ...recurVal])
        result.push(...attach)
    })
    
    return result
}