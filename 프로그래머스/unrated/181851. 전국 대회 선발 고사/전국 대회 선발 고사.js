function solution(rank, attendance) {
    var answer = 0;
    const att = rank.reduce((acc, cur, i) => {
        if(attendance[i]) {
            acc.push({rank: cur, idx: i})
        }
        return acc
    }, [])
    att.sort((a, b) => a.rank - b.rank)
    return 10000 * att[0].idx + 100 * att[1].idx + att[2].idx;
}