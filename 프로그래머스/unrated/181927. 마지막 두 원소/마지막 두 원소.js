function solution(num_list) {
    const last = num_list[num_list.length -1]
    const prevLast = num_list[num_list.length -2]
    return [...num_list, last > prevLast ? last - prevLast : last * 2 ]
}