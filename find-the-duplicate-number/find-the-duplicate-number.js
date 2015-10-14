var findDuplicate = function(nums) {
    var n = nums.length,
        slow = n,
        fast = n

    // fast catch up slow
    do {
        slow = nums[slow - 1]
        fast = nums[nums[fast - 1] - 1]
    } while(fast !== slow)

    // get the duplicate number
    slow = n
    while(fast !== slow){
        slow = nums[slow - 1]
        fast = nums[fast - 1]
    }

    return slow
};
