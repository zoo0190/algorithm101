function solution(arr) {
    const rowLength = arr.length
    const columnLength = arr[0].length
    
    if(rowLength === columnLength) return arr
    if(rowLength > columnLength) {
        const zeroArr = Array.from({length: rowLength - columnLength}, () => 0)
        for(const a of arr) {
            a.push(...zeroArr)
        }
        return arr
    }
    if(rowLength < columnLength) {
        const zeroArr = Array.from({length: columnLength}, () => 0)
        for(let i = 0; i < columnLength - rowLength; i++) {
            arr.push(zeroArr)
        }
        return arr
    }
}
