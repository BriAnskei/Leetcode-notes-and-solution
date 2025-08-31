class Solution(object):
    def checkInclusion(self, s1, s2):
        if len(s1) > len(s2): return False
        
        s1Count, s2Count = [0] * 26, [0] * 26
        count = 0

        for i in range(len(s1)):
            s1Count[ord(s1[i]) - ord('a')] =+1
            s2Count[ord(s2[i]) - ord('a')] =+1

        for i in range(26):
            count += (1 if s1Count[i] == s2Count[i] else 0)

        lo = 0
        for hi in range(len(s1), len(s2)):

            if count == 26: return True
            
            index = ord(s2[hi]) - ord('a')
            s2Count[index]+= 1
            if s1Count[index] == s2Count[index]:
                count+=1
            elif s1Count[index] + 1 == s2Count[index]:
                count-=1

            index = ord(s2[lo]) - ord('a')
            s2Count[index]-= 1
            if s1Count[index] == s2Count[index]:
                count+=1
            elif s1Count[index] - 1 == s2Count[index]:
                count-=1

            lo+=1

        return count == 26

        