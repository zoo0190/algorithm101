function solution(n, a, b) {
  if (a % 2 === 0 && a - 1 === b) return 1;
  if (a % 2 === 1 && a === b - 1) return 1;

  a = parseInt(a / 2) + (a % 2);
  b = parseInt(b / 2) + (b % 2);

  return 1 + solution(n / 2, a, b);
}