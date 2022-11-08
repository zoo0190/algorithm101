function solution(n) {
  let answer = 0
  answer = fibonacciMemo(n)
  return answer
}

function fibonacciMemo(n) {
  const memo = {
    0: 0,
    1: 1,
  };

  for (let i = 2; i <= n; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
  }

  return memo[n];
}