function solution(n, words) {
    const answer = (idx) => {
      const quotient = parseInt((idx + 1) / n)
      const remainder = (idx + 1) % n
			return [remainder === 0 ? n : remainder, remainder === 0 ? quotient : quotient + 1]
    }
    
    const arr = []
    
    for (let [idx, item] of words.entries()) {
      const dupleCheck = arr.find((value) => value === item)
      if(!!dupleCheck) {
        return answer(idx)
      }
      
      const prevValue = arr[arr.length - 1]
      if (!!prevValue) {
        if(prevValue[prevValue.length - 1] !== item[0]) {
          return answer(idx)
        }
      }
      arr.push(item)
    }
  	return [0, 0]
}