class Solution(object):
    # Faster prevIdx Version
    def maximumSubarraySum(self, nums, k):
        res = 0
        prevIdx = {}  # num -> previous index
        curSum = 0
        l = 0

        for r in range(len(nums)):
            curSum += nums[r]

            i = prevIdx.get(nums[r], -1)

            while l <= i or r - l + 1 > k:
                curSum -= nums[l]
                l += 1

            if r - l + 1 == k:
                res = max(res, curSum)

            prevIdx[nums[r]] = r
        return res
    

    # freq count map version
    def maximumSubarraySum(nums, k):
    res = 0
    count = {}
    curSum = 0
    l = 0

    for r in range(len(nums)):
        curSum += nums[r]
        count[nums[r]] = count.get(nums[r], 0) + 1

        if r - l + 1 > k:
            count[nums[l]] -= 1
            if count[nums[l]] == 0:
                del count[nums[l]]
            curSum -= nums[l]
            l += 1

        if len(count) == r - l + 1 and r - l + 1 == k:
            res = max(res, curSum)

    return res

    

s = Solution()

print(s.maximumSubarraySum([2, 2, 3, 4, 5], 3))
