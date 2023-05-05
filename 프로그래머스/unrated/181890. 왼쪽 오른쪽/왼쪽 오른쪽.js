function solution(str_list) {
    const lIndex = str_list.findIndex((v) => v === 'l')
    const rIndex = str_list.findIndex((v) => v === 'r')
    if(lIndex === rIndex) return []
    
    if(lIndex === -1 && rIndex >= 0) {
        return str_list.slice(rIndex + 1)
    }
    
    if(rIndex === -1 && lIndex >= 0) {
        return str_list.slice(0, lIndex)
    }
    
    if(lIndex < rIndex) {
        return str_list.slice(0, lIndex)
    } else {
        return str_list.slice(rIndex + 1)
    }
}