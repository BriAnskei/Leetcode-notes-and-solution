import collections


class Solution:
    def maxSlidingWindow(self, nums, k):
        res = []
        q = collections.deque()
        
        
        l = 0
        for h in range(len(nums)):
            while q and nums[q[-1]] < nums[h]:
                q.pop()
            q.append(h)


            if l > q[0]:
                q.appendleft()

            if h + 1 >= k:
                res.append(nums[q[0]])
                l += 1
            r += 1
        return res



        
        