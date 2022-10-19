function solution(s) {
  var answer = '';
  const result = s.split(' ').map((value) => +value).sort((a, b) => a - b)
  answer = `${result[0]} ${result[result.length - 1]}`
  return answer;
}