function solution(num_list) {
    let odd = 0
    let even = 0
    num_list.forEach((v, i) => {
        if(i % 2 === 0) {
            odd += num_list[i]
        } else {
            even += num_list[i]
        } 
    })
    return odd > even ? odd : even;
}