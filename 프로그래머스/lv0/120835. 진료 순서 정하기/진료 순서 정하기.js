function solution(emergency) {
    const obj = {}
    
    const sort = [...emergency].sort((a, b) => b - a)
    
    sort.forEach((item, i) => {
        obj[item] = i + 1
    })
    
    return emergency.map((item) => obj[item]);
}