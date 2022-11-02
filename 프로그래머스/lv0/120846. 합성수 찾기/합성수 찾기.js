function solution(n) {
    const initArr = Array(n - 1).fill(2).map((item, idx) => item + idx)
    const initLength = initArr.length
    
    initArr.forEach((val) => {
        initArr.forEach((item, idx) => {
            if(item % val === 0 && item !== val) {
                initArr.splice(idx, 1)
            }
        })     
    })
    
    return initLength - initArr.length;
}