class Solution(object):
    def findLengthOfLCIS(self, nums):
       res = 0

       lo = 0
       prevVal = float('-inf')
       for hi in range(len(nums)):
           if prevVal >= nums[hi]:
               lo = hi
           prevVal = nums[hi]
           res = max(res, hi - lo + 1)
           
       return res
           
        