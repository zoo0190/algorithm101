function solution(numbers, target) {
  let answer = 0;
  getAnswer(0,0);
  function getAnswer(x,value) {
      if(x<numbers.length){
          getAnswer(x+1,value + numbers[x]);
          getAnswer(x+1,value - numbers[x]);
      } else{
          if(value === target){
              answer++
          }
      }
  }
  return answer;
}