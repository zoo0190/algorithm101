function solution(prices) {
    return prices.map((v, i) => {
        for(let j = i + 1; j < prices.length; j++ ) {
            if(v > prices[j]) {
                return j - i
            }
        }
        return prices.length - 1 - i
    })
}