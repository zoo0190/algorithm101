function solution(my_string, overwrite_string, s) {
    const sliceStr = my_string.slice(0, s)
    return sliceStr + overwrite_string + my_string.slice((sliceStr + overwrite_string).length)
}