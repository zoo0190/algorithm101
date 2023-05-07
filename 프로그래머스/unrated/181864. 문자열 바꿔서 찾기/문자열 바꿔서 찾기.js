function solution(myString, pat) {
    let res = ''
    for(const str of myString) {
        if(str === 'A') res += 'B'
        if(str === 'B') res += 'A'
    }
    return res.includes(pat) ? 1 : 0;
}