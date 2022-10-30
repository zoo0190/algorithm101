function solution(num, total) {
    var answer = [];
    
    if(num % 2 === 1) {
        const val = total / num
        const step  = parseInt(num / 2)
        const startNum = val - step
        for (let n = startNum; n <= val + step; n++) {
            answer.push(n)
        }
    } else {
        const lastNum = parseInt(total / num) + parseInt(total % num)
        const startNum = lastNum - num + 1
        
        for (let n = startNum; n <= lastNum; n++) {
            answer.push(n)
        }
    }
    
    return answer;
}