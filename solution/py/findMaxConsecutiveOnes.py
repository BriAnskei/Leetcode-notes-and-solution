class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        n = len(nums)
        res = 0
        lo = 0
        for  hi in range(len(nums)):
            if nums[hi] == 1:
                res = max(res, hi - lo + 1)  
            else: 
                lo = hi + 1

    
        return res
        