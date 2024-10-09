function solution(phone_book) {
  const sortByLength = [...phone_book].sort()

  for (let i = 0; i < sortByLength.length - 1; i++) {
    if (sortByLength[i + 1].startsWith(sortByLength[i])) {
      return false
    }
  }

  return true

}