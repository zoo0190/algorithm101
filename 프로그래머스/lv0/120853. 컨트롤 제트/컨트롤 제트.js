function solution(s) {
    const toArr = s.split(' ')
    
    while(toArr.indexOf('Z') !== -1) {
        const idx = toArr.indexOf('Z')
        toArr.splice(idx - 1, 2)
    }
    
    return toArr.reduce((acc, cur) => acc += +cur, 0);
}