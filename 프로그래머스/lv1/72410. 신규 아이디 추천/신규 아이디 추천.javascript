function solution(new_id) {
    let answer = ''
    answer = new_id
        .toLowerCase()
        .replace(/[^a-z0-9-_.]/g, "")
        .replace(/\.{2,}/g, ".")
        .replace(/^\./g, "")
        .replace(/\.$/g, "")
      if (answer.length === 0) answer = "a"
      if (answer.length >= 16) answer = answer.substring(0, 15)
      answer = answer.replace(/\.$/g, "")
    
      while (answer.length <= 2) {
        answer = answer + answer[answer.length - 1]
      }
      return answer
}