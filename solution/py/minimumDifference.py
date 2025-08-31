class Solution(object):
    def maximumLengthSubstring(self, s):
      res = 0
      for lo in range(len(s)):
          count = {}
          hi = lo
          while(hi < len(s)):
             count[s[hi]] = count.get(s[hi], 0) + 1

             if(count[s[hi]] > 2):
                res = max(res, hi - lo)
                break
             elif(hi + 1 == len(s)):
                return max(res, hi - lo + 1)
             hi += 1
        
      return res
    

s =  Solution()
print(s.maximumLengthSubstring('bcbbbcba'))
        