class Solution(object):
    def characterReplacement(self, s, k):
        count = {}
        res = 0
        
        l = 0
        maxF = 0
        for h in range(len(s)):
            count[h] = count.get(s[h], 0) + 1
            maxF = max(maxF, count[h])

            print("current loop: ", maxF, l, h)

            while h - l + 1 - maxF > k:
                  count[l] = count.get(s[l], 0) - 1
                  l+=1
            res = max(res, h - l + 1)

        return res

