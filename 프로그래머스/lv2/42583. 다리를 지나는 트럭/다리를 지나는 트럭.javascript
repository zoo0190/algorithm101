function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  const arr = []
  let arrSum = 0
  
  for (let i = 0; i < bridge_length; i++) {
    arr.push(0)
  }
  let leftPop = truck_weights.shift()
  arr.pop()
  arr.unshift(leftPop)
  arrSum += leftPop
  answer++
  
  while(arrSum) {
    arrSum -= arr.pop()
    if (truck_weights.length !== 0) {
      if (arrSum + truck_weights[0] > weight) {
      arr.unshift(0)
    } else {
        leftPop = truck_weights.shift()
        arrSum += leftPop
        arr.unshift(leftPop)
      }
    }
    answer++
  }
  return answer;
}