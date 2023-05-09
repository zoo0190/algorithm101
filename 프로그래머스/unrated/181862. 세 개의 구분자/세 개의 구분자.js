function solution(myStr) {
    const val = myStr.replace(/a|b|c/g, ' ').split(' ').filter((v) => v)
    return val.length ? val : ['EMPTY']
}