function solution(q, r, code) {
    return code
        .split('').map((v, i) => ({str: v, remainder: i % q}))
        .filter((v) => v.remainder === r)
        .reduce((acc, cur) => acc += cur.str, '');
}