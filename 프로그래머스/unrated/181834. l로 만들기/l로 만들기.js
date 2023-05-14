function solution(myString) {
    let answer = ''
    const mapping = {
        a: 'l',
        b: 'l',
        c: 'l',
        d: 'l',
        e: 'l',
        f: 'l',
        g: 'l',
        h: 'l',
        i: 'l',
        j: 'l',
        k: 'l'
    }
    for(const str of myString) {
        mapping[str] ? answer += mapping[str] : answer += str
    }
    return answer;
}