function solution(before, after) {
    const objB = before.split('').reduce((acc, cur) => {
        if(acc[cur]) {
            acc[cur] += 1
        } else {
            acc[cur] = 1
        }
        return acc
    }, {})
    
    const objA = after.split('').reduce((acc, cur) => {
        if(acc[cur]) {
            acc[cur] += 1
        } else {
            acc[cur] = 1
        }
        return acc
    }, {})
    
    const keyArr = Object.keys(objB)
    
    for (let s of keyArr) {
        if(objB[s] !== objA[s]) return 0
    }
    
    return 1;
}