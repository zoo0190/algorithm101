function solution(arr, delete_list) {
    return arr.reduce((acc, cur) => {
        if(!delete_list.includes(cur)) {
            acc.push(cur)
        }
        return acc 
    }, []);
}