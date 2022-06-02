function solution(s) {
    const mappingTable = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }
    const result = []
    let tempArr = []
    s.split('').forEach((item) => {
        if (Number.isNaN(+item)) {
            tempArr.push(item)
            const convert = mappingTable[tempArr.join('')] 
            if (convert || convert === 0) {
                result.push(convert)
                tempArr = []
            }
        } else {
            result.push(+item)
        }
    })
    return +result.join('')
}