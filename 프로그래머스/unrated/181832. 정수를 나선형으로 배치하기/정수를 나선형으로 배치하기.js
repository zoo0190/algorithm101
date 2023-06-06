function solution(n) {
  const twoDArr = new Array(n).fill(0).map(() => new Array(n).fill(0));
    
  let top = 0;
  let right = n - 1;
  let bottom = n - 1;
  let left = 0;
  let num = 1;

  while (top <= bottom) {
    for (let col = left; col <= right; col++) {
      twoDArr[top][col] = num;
      num += 1;
    }
    top += 1;

    for (let row = top; row <= bottom; row++) {
      twoDArr[row][right] = num;
      num += 1;
    }
    right -= 1;

    for (let col = right; col >= left; col--) {
      twoDArr[bottom][col] = num;
      num += 1;
    }
    bottom -= 1;

    for (let row = bottom; row >= top; row--) {
      twoDArr[row][left] = num;
      num += 1;
    }
    left += 1;
  }

  return twoDArr;
}