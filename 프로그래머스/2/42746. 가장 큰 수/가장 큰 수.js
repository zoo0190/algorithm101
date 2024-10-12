function solution(numbers) {
    const result = numbers.sort((a, b) => {
        const ab = `${a}${b}`
        const ba = `${b}${a}`
        return ba.localeCompare(ab)
    })
    
    return result.every((v) => v === 0) ? "0" : result.join('')
}