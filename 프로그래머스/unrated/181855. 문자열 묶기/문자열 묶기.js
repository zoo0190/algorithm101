function solution(strArr) {
    var answer = 0;
    
    const res = strArr.reduce((acc, cur) => {
        const curLength = cur.length
        if(acc[curLength]) {
            acc[curLength] = acc[curLength] + 1
        } else {
            acc[curLength] = 1
        }
        return acc
    }, {})
    
    Object.keys(res).forEach((v) => {
        res[v] > answer ? answer = res[v] : answer
    })
    
    return answer;
}