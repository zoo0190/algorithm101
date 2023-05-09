function solution(arr) {
    const stk = [];
    let i = 0
    while(i < arr.length) {
        if(stk.length && stk[stk.length -1] === arr[i]) {
            stk.pop()
            i += 1
            continue
        }
        if(stk.length && stk[stk.length -1] !== arr[i]) {
            stk.push(arr[i])
            i += 1
			continue
        }
        if(!stk.length) {
            stk.push(arr[i])
            i += 1
            continue
        }
    }
    return stk.length ? stk : [-1];
}