function solution(n) {
    const onePlusArr = (startNum, EndNum) => {
        return [...Array(EndNum - startNum + 1).keys()].map(key => key + startNum)
    }
    
    let result = 0
    const primeArr = []
    const checkNum = n - 1
    
    if (checkNum % 2 === 0) {
        result = 2
    } else {
        const checkArr = onePlusArr(1, Math.floor(Math.sqrt(checkNum)))
        checkArr.forEach(item => {
            if (primeArr.length >= 2) return
            if (checkNum % item === 0) {
                primeArr.push(item)
            }
        })
        if (primeArr.length === 1) result = checkNum
        if (primeArr.length >= 2) result = primeArr[1]
    }
    
    return result
}