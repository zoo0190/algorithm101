function solution(numbers, hand) {
  var answer = '';
  const numberPosition = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1]
  }
  const handPostion = {
    "L": [3, 0],
    "R": [3, 2]
  }
  numbers.forEach((value) => {
    if (value === 1 || value === 4 || value === 7) {
      answer += "L"
      handPostion["L"] = numberPosition[value]
    }
    if (value === 3 || value === 6 || value === 9) {
      answer += "R"
      handPostion["R"] = numberPosition[value]
    }
    if (value === 2 || value === 5 || value === 8 || value === 0) {
      const standardL = Math.abs(numberPosition[value][0] - handPostion["L"][0]) + Math.abs(numberPosition[value][1] - handPostion["L"][1])
      const standardR = Math.abs(numberPosition[value][0] - handPostion["R"][0]) + Math.abs(numberPosition[value][1] - handPostion["R"][1])
      if (standardL < standardR) {
        answer += "L"
        handPostion["L"] = numberPosition[value]
      }
      if (standardL > standardR) {
        answer += "R"
        handPostion["R"] = numberPosition[value]
      }
      if (standardL === standardR) {
        if (hand === "right") {
          answer += "R"
          handPostion["R"] = numberPosition[value]
        } else {
          answer += "L"
          handPostion["L"] = numberPosition[value]
        }
      }
    }
  })
  return answer
}