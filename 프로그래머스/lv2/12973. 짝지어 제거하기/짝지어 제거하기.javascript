function solution(s)
{
    let answer = 0
    const arr = []
    const toArr = s.split('')
    
    if (toArr.length % 2 === 1) return 0
    
    while(toArr.length !== 0) {
        const popValue = toArr.pop()
        if (arr[arr.length - 1] === popValue) {
            arr.pop()
        } else {
            arr.push(popValue)
        }
    }
    
    answer = arr.length === 0 ? 1 : 0
    return answer
}