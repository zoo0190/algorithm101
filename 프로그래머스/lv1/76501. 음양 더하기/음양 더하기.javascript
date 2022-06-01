function solution(absolutes, signs) {
    let result = 0
    absolutes.forEach((item, idx) => {
        const check = signs[idx] ? item : -item
        result += check
    })
    return result
}