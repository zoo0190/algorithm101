function solution(a, b) {
    var answer = 0;
    const st1 = String(a)
    const st2 = String(b)
    return st1 + st2 > st2 + st1 ? Number(st1 + st2) : Number(st2 + st1)
}