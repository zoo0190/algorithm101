function solution(s) {
    var answer = [];
    
    const obj = s.split('').reduce((acc, cur) => {
        if (acc[cur]) {
            acc[cur] += 1
        } else {
            acc[cur] = 1
        }
        return acc
    }, {})
    
    for (let ss in obj) {
        if(obj[ss] === 1) answer.push(ss)
    }
    
    return answer.sort().join('');
}