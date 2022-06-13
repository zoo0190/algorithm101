function solution(people, limit) {
  var answer = 0;
  let l = 0;
  let r = people.length - 1;
  
  people.sort((a,b) => b - a)
   
  while(l <= r) {
    if (people[l] + people[r] > limit) {
      answer++
      l++
    } else {
      answer++
      l++
      r--
    }
  }
  return answer
}