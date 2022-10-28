function solution(A, B) {
    if (A === B) return 0
    
    var answer = 0;
    let toArrA = A.split('')
    
    for (let i = 0; i < toArrA.length; i++) {
        const pop = toArrA.pop()
        toArrA = [pop, ...toArrA]

        if(toArrA.join('') === B) return i + 1
    }
    
    return -1;
}