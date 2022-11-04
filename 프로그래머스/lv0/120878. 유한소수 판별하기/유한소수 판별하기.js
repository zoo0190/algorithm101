function solution(a, b) {
    const aArr = []
    const bArr = []
    
    const fn = (n, arr) => {
       if (n === 1) return arr;
       let divisor = 2
    
        while(true) {
            if(n % divisor === 0) {
                arr.push(divisor)
                n = n / divisor
                divisor = 2
            } else {
                divisor += 1
            }
            if (n <= divisor) {
                arr.push(divisor)
                break
            }
        }
    }
    
    fn(a, aArr)
    fn(b, bArr)

    for (let kk of aArr) {
      const idx = bArr.indexOf(kk);
      if (idx !== -1) {
          bArr.splice(idx, 1);
      }
    }
    
    return bArr.every((item) => item === 2 || item === 5) ? 1 : 2
}