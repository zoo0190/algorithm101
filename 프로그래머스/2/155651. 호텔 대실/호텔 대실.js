function solution(book_time) {
  const availableTimes = []
  
  const convertMinute = book_time.map((v) => {
    const [start, end] = v
    const [startTime, startMinute] = start.split(':')
    const [endTime, endMinute] = end.split(':')
    return [+startTime * 60 + +startMinute, +endTime * 60 + +endMinute]
  })

  convertMinute.sort((a, b) => a[0] - b[0]).forEach((v) => {
    availableTimes.sort((a, b) => a - b)
    if (!availableTimes.length) {
      availableTimes.push(v[1] + 10)
    } else {
      const fastestTime = availableTimes[0]
      if (fastestTime <= v[0]) {
        availableTimes[0] = v[1] + 10
      } else {
        availableTimes.push(v[1] + 10)
      }
    }
  })

  return availableTimes.length
}