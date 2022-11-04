function solution(spell, dic) {
    let answer = true
    dic.forEach((item) => {
        const copySpell = [...spell]
        
        for(let s of item) {
            const idx = copySpell.indexOf(s)
            if (idx !== -1) copySpell.splice(idx, 1)
        }
        
        if(copySpell.length === 0) {
            answer = false
            return 
        }
    })
    return answer ? 2 : 1
}