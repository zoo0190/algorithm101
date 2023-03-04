function solution(keymap, targets) {
  const table = keymap.reduce((acc, cur) => {
    cur.split("").forEach((item, idx) => {
      if (!acc[item]) {
        acc[item] = idx + 1;
      } else {
        if (acc[item] >= idx + 1) acc[item] = idx + 1;
      }
    });
    return acc;
  }, {});

  const result = targets.reduce((acc, cur) => {
    const val = cur.split("").reduce((acc2, cur2, i, arr) => {
      if (table[cur2]) {
        acc2 += table[cur2];
      } else {
        arr.splice(i);
        acc2 = -1;
      }
      return acc2;
    }, 0);

    acc.push(val);
    return acc;
  }, []);

  return result;
}