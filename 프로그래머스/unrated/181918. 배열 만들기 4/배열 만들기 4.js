function solution(arr) {
    let i = 0
    var stk = [];
  	while(i < arr.length) {
        if(!stk.length) {
           stk.push(arr[i]) 
           i += 1
        }
        if(stk.length && stk[stk.length -1] < arr[i]) {
            stk.push(arr[i])
            i += 1
        } else {
            stk.pop()
        }
    }
    return stk;
}