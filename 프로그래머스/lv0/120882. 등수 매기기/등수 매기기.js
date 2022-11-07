function solution(score) {
    const obj = {}
    const add = score.map((item) => item[0] + item[1])
    const sortArr = [...add].sort((a, b) => b - a)
    
    sortArr.forEach((item, idx) => {
        if(!obj[item]) {
            obj[item] = idx + 1
        }
    })
    
    return add.map((item) => obj[item]);
}