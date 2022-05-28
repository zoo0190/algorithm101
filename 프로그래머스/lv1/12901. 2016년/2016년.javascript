function solution(a, b) {
  var answer = ''
  let daySum = 0
  let num = 1
  const obj = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  }
  const day =  ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]
  while(num < a) {
    daySum = daySum + obj[num]
    num++
  }
  daySum = daySum + b
  return day[daySum % 7]
}