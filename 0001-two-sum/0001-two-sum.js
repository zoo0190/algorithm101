/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {}
    let idx = 0
    
    for (const num of nums) {
        const val = target - num
        if(hash[val] !== undefined) {
            return [hash[val], idx]
        } else {   
            hash[num] = idx
        }
        
        idx += 1
    }
};