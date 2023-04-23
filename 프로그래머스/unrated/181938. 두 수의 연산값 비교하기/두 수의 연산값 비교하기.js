function solution(a, b) {
    var answer = 0;
    const add = Number(String(a) + String(b))
    const mul = 2 * a * b
    return add > mul ? add : mul
}