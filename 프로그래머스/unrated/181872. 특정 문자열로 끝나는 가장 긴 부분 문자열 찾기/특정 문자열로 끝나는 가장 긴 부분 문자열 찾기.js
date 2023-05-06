function solution(myString, pat) {
    let i = 0
    while(true) {
        const index = myString.indexOf(pat, i)
        if(index === -1) return myString.slice(0, i + pat.length - 1)
        i = index + 1
    }
}