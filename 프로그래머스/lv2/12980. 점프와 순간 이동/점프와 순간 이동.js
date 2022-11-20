function solution(n) {
  let ans = -1;

  while (true) {
    if (n === 1) break;
    const value = parseInt(n / 2);
    if (n % 2 === 1) ans -= 1;
    if (value === 1) break;
    n = value;
  }

  return Math.abs(ans);
}