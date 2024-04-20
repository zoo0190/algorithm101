function solution(k, tangerine) {
    const sizeCount = tangerine.reduce((ac, cr) => {
        if(ac[cr]) {
            ac[cr] = ac[cr] + 1
        } else {
            ac[cr] = 1
        }
        return ac      
    }, {})
    
    const countDesc = [...Object.values(sizeCount)].sort((a, b) => b - a)
    
    let result = 0
    
    for (const count of countDesc) {
        k = k - count
        result += 1
        if(k <= 0) {
            break
        }
    }
    
    return result
}