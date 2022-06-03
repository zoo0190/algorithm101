function solution(id_list, report, k) {
    const setDeduplication = new Set(report)
    const deduplication = [...setDeduplication]
    
    if (deduplication.length < k) return Array(id_list.length).fill(0)
    
    const obj = {}
    
    deduplication.forEach((value) => {
    const [reporting, reported] = value.split(' ')
      if (!obj[reported]) {
        obj[reported] = [reporting]
      } else {
        obj[reported].push(reporting)
      }
    })
    
    const arr = []
    
    const toObj = {}
    
    id_list.forEach((item) => {
        toObj[item] = 0
    })
    
    for (const v in obj) {
        if (obj[v].length >= k) {
            arr.push(...obj[v])
        }
    }
    
    arr.forEach((item) => {
        toObj[item] += 1
    })
    
    return Object.values(toObj)
}