function solution(cards1, cards2, goal) {
  var answer = "Yes";
  let cards1Idx = 0;
  let cards2idx = 0;
  for (const word of goal) {
    const result = checkCard(cards1, word, cards1Idx)
      ? (true, (cards1Idx += 1))
      : checkCard(cards2, word, cards2idx)
      ? (true, (cards2idx += 1))
      : false;
    if (!result) return "No";
  }
  return answer;
}

const checkCard = (cards, checkWord, i) => {
  return cards[i] === checkWord ? true : false;
};