function solution(s) {
  let answer = '';
  const strLength = s.length % 2

  if (strLength === 0) {
    return s[s.length / 2 -1] + s[s.length / 2]
  } else {
    return s[Math.floor(s.length / 2)]
  }
}