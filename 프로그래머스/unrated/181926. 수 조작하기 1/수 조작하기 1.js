function solution(n, control) {
    for(const co of control) {
        if(co === 'w') n += 1
        if(co === 's') n -= 1
        if(co === 'd') n += 10
        if(co === 'a') n -= 10
    }
    return n;
}