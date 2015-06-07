
var searchInsert = function(nums, target, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? nums.length - 1 : end;

    if (nums.length === 0) {
      return 0;
    } else if (end - start <= 0) {
      return nums[start] >= target ? start : start + 1;

    }

    var mid = Math.floor((start + end) / 2);

    if (nums[mid] < target) {
        return searchInsert(nums, target, mid + 1, end);
    } else if (nums[mid] > target) {
        return searchInsert(nums, target, start, mid - 1);
    } else {
        return mid;
    }
};

