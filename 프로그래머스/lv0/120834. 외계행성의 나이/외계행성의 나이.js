function solution(age) {
    return [...String(age)].map((item) => {
        const ascii = +item + 97
        return String.fromCharCode(`${ascii}`)
    }).join('');
}