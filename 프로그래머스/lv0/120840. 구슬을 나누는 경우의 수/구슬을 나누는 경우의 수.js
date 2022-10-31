function solution(balls, share) {
    let val1 = 1
    let val2 = 1
    
    share = share > parseInt(balls / 2) ? balls - share : share

    for (let i = 0; i < share; i++ ) {
        val1 *= balls - i
    }
    
    for (let a = 1; a <= share; a++) {
        val2 *= a
    }
    
    return val1 / val2;
}