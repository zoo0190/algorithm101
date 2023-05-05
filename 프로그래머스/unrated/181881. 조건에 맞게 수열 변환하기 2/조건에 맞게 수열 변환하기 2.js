function solution(arr) {
    var answer = 0;

    while(true) {
        const nextArr = arr.map((v) => {
            if(v >= 50 && v % 2 === 0) return v / 2
            if(v < 50 && v % 2 === 1) return v * 2 + 1
            return v
        })
        
        if(arr.toString() === nextArr.toString()) return answer
        arr = nextArr
        answer += 1
    }
    
    return answer;
}