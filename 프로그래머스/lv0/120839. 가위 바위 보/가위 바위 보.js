function solution(rsp) {
    let answer = ''
    const winTable = {
        2: 0,
        0: 5,
        5: 2
    }
    
    for(let s of rsp) {
        answer += winTable[s]
    }
    
    return answer;
}