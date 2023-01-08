function solution(s) {
    const obj = {}
    var answer = [];
    
    s.split('').forEach((item, idx) => {
        if(obj[item] !== 0 && !obj[item]) {
            answer.push(-1)
            obj[item] = idx
        } else {
            answer.push(idx - obj[item])
            obj[item] = idx
        }
    })
    
    return answer;
}