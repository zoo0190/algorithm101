function solution(arr) {
    return arr.map((v) => {
        if(v >= 50) {
            if(v % 2 === 0) return v / 2
        } else {
            if(v % 2 === 1) return v * 2
        }
        return v
    });
}