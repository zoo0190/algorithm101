function solution(array) {
    var answer = 0;
    
    const mode = array.reduce((acc, cur) => {
        if(!acc[cur]) {
            acc[cur] = 1
        } else {
            acc[cur] += 1
        }
        return acc
    }, {})
    
    const toArr = Object.entries(mode).sort((a, b) => b[1] - a[1])

    if(toArr.length === 1) {
        answer = toArr[0][0]
    } else {
        toArr[0][1] === toArr[1][1] ? answer = -1 : answer = toArr[0][0]
    }
    
    return +answer;
} 