function solution(want, number, discount) {
    var answer = 0;
    let idx = 9;
    const wantObj = {}
    
    want.forEach((item, idx) => {
        wantObj[item] = number[idx]
    })
    
    while(idx < discount.length) {
        const obj = makeObj(idx - 9, idx, discount)
        isEqual(wantObj, obj) ? answer += 1 : ''
        idx += 1
    }
    
    
    
    return answer;
}

const makeObj = (start, end, arr) => {
   const obj = {}
   
   for(let i = start; i <= end; i++) {
       const val = arr[i]
       if(!obj[val]) {
           obj[val] = 1
       } else {
           obj[val] += 1
       }
   }
   
   return obj
}

const isEqual = (obj1, obj2) => {
    const keys = Object.keys(obj1)
    
    for(let k of keys) {
        if(obj1[k] !== obj2[k]) {
            return false
        }
    }
    
    return true
}