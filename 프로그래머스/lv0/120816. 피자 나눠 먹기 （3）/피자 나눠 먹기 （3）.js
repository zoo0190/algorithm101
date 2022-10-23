function solution(slice, n) {
    const result = parseInt(n / slice)
    
    return n % slice ? result + 1 : result;
}