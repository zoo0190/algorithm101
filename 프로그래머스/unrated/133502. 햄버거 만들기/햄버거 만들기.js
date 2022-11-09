function solution(ingredient) {
  let answer = 0;
  const tempArr = [];

  ingredient.forEach((item) => {
    tempArr.push(item);
    if (tempArr.slice(-4).toString() === '1,2,3,1') {
      tempArr.splice(-4);
      answer += 1;
    }
  });

  return answer;
}