function solution(n) {
    const arr = []
    let val = 1
    
    for(let nn = 1; nn <= n; nn++) {
        if(val % 3 === 0) {
            val += 1
        }
        while(String(val).includes(3)) {
            val += 1
            if(val % 3 === 0) {
                val += 1
            }
        }

        arr.push(val)
        val += 1
    }

    return arr[arr.length - 1];
}