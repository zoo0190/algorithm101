function solution(price) {
    if(price >= 500000) return parseInt(price - price * 0.2)
    if(price >= 300000) return parseInt(price - price * 0.1)
    if(price >= 100000) return parseInt(price - price * 0.05)
    return price
}