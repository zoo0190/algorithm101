function solution(a, b, c, d) {
    const isEqual = (arr1, arr2) => arr1.every((val, index) => arr1.length === arr2.length && val === arr2[index]);
    const arr = [a, b, c, d]
    const obj = arr.reduce((acc, cur) => {
        !acc[cur] ? acc[cur] = 1 : acc[cur] += 1
        return acc
    }, {})
    const values = Object.values(obj).sort((a, b) => a - b)
    const keys = Object.keys(obj)
    if(isEqual(values, [4])) {
        return 1111 * Object.keys(obj)[0]
    }
    if(isEqual(values, [1, 3])) {
        let p = 0
        let q = 0
        keys.forEach((key) => {
            if(obj[key] === 3) p = +key
            if(obj[key] === 1) q = +key
        })
        return (10 * p + q) ** 2
    }
    if(isEqual(values, [2, 2])) {
        const [p, q] = keys
        return (+p + +q) * Math.abs(+p - + q)
    }
    if(isEqual(values, [1, 1, 2])) {
        let val = 1
        keys.forEach((key) => {
            if(obj[key] === 1) val *= +key
        })
        return val
    }
    if(isEqual(values, [1, 1, 1, 1])) {
        return Math.min(...keys)
    }
}