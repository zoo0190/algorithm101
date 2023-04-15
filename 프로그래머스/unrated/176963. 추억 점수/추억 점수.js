function solution(name, yearning, photo) {
    const map = name.reduce((acc, cur, idx) => {
        acc[cur] = yearning[idx]
        return acc
    }, {})
    const answer = photo.map((item) => item.reduce((acc, cur) => {
        const score = map[cur]
        acc += score ? score : 0
        return acc
    }, 0)) 
    return answer;
}