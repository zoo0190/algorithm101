function solution(date1, date2) {
    const strDate1 = date1.join('')
    const strDate2 = date2.join('')
    return +strDate1 >= +strDate2 ? 0 : 1
}