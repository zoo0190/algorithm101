function solution(polynomial) {
    let answer = ''
    let xNum = 0
    let num = 0
    const toArr = polynomial.split(' + ')
    
    toArr.forEach((item) => {
        if(item.includes('x')) {
            const val = item.split('x')[0]
            if(val.length === 0) xNum += 1
            else xNum += +val
        } else {
            num += +item
        }
    })
    
    answer = `${xNum === 1 ? 'x' : xNum + 'x'}`;
    
    if(!xNum) return `${num}`
    if(!num) return `${answer}`
    return `${answer} + ${num}`;
}