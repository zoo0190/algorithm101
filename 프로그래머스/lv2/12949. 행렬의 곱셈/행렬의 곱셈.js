function solution(arr1, arr2) {
  const answer = [];

  for (let row of arr1) {
    const arr = [];
    for (let i = 0; i < arr2[0].length; i++) {
      let val = 0;
      for (let j = 0; j < arr2.length; j++) {
        val += row[j] * arr2[j][i];
      }
      arr.push(val);
    }
    answer.push(arr);
  }
  
  return answer;
}