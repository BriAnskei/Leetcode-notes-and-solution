class Solution(object):
    def numSubarrayProductLessThanK(self, nums, k):
      res = 0
      l = 0
      product = 0
 
      for h in range(len(nums)):
         product *= nums[h]

         while l  <= rproduct >= k:
            product = product // nums[l]
            l+=1

         res += h - l + 1

      return res
        