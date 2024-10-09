function solution(today, terms, privacies) {
  const monthToDay = 28
  
  const makeDay = (day) => {
    const [yyyy, mm, dd] = day.split('.')
    return ((+yyyy - 2000) * 12 * monthToDay) + (+mm * monthToDay) + +dd
  }
  
  const todayToDay = makeDay(today)
  
  const termsToDay = Object.fromEntries(terms.map((v) => {
    const [condition, period] = v.split(" ")
    return [condition, +period * monthToDay]
  }))
  
  const result = privacies.reduce((ac, cr, i) => {
    const [collectionDate, condition] = cr.split(" ")
    const expireDay = makeDay(collectionDate) + termsToDay[condition] - 1 // 당일포함
   
    if (todayToDay > expireDay) {
      ac.push(i + 1)
    }
      
    return ac
  }, [])
  return result

}