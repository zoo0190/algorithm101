function solution(order) {
    return order.reduce((acc, cur) => {
        if(cur.includes('americano') || cur.includes('anything')) {
            acc += 4500
        }
        if(cur.includes('cafelatte')) {
            acc += 5000
        }
        return acc
    }, 0)
}