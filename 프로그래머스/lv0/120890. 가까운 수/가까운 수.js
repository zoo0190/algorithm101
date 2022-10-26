function solution(array, n) {
    let diff = Math.abs(n - array[0]);
    let closeNum = array[0];
    
    array.forEach((item, idx) => {
        const diffAbs = Math.abs(n - item)
        if((diff === diffAbs) && (closeNum > item)) {
            closeNum = item
        }
        if(diff > diffAbs) {
            diff = diffAbs
            closeNum = item
            
        }
        
    })
    return closeNum;
}