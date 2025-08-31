# Sliding Window Algorithm - Java Guide

## What is Sliding Window?

The sliding window technique is an algorithmic approach used to solve problems involving arrays or strings by maintaining a "window" of elements that slides through the data structure. Instead of using nested loops, this technique optimizes time complexity by expanding and contracting the window based on certain conditions.

## Key Concepts

- **Window**: A subarray or substring of contiguous elements
- **Left Pointer**: Marks the start of the window
- **Right Pointer**: Marks the end of the window
- **Window Size**: Can be fixed or variable depending on the problem

## Types of Sliding Window

### 1. Fixed Size Window

The window size remains constant throughout the algorithm.

### 2. Variable Size Window

The window size changes based on certain conditions.

## Time Complexity

- **Before**: O(n²) or O(n³) with nested loops
- **After**: O(n) with sliding window

## Common Problem Patterns

1. **Maximum/Minimum in subarrays of size k**
2. **Longest substring with k distinct characters**
3. **Smallest subarray with sum ≥ target**
4. **Finding anagrams in a string**

## Java Implementation Examples

### Example 1: Maximum Sum of Subarray of Size K (Fixed Window)

```java
public class SlidingWindow {

    // Find maximum sum of subarray of size k
    public static int maxSumSubarray(int[] arr, int k) {
        if (arr.length < k) return -1;

        // Calculate sum of first window
        int windowSum = 0;
        for (int i = 0; i < k; i++) {
            windowSum += arr[i];
        }

        int maxSum = windowSum;

        // Slide the window
        for (int i = k; i < arr.length; i++) {
            windowSum = windowSum - arr[i - k] + arr[i];
            maxSum = Math.max(maxSum, windowSum);
        }

        return maxSum;
    }
}
```

### Example 2: Longest Substring Without Repeating Characters (Variable Window)

```java
import java.util.*;

public class LongestSubstring {

    public static int lengthOfLongestSubstring(String s) {
        Set<Character> window = new HashSet<>();
        int left = 0, maxLength = 0;

        for (int right = 0; right < s.length(); right++) {
            char currentChar = s.charAt(right);

            // Shrink window until no duplicates
            while (window.contains(currentChar)) {
                window.remove(s.charAt(left));
                left++;
            }

            window.add(currentChar);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
```

### Example 3: Minimum Window Substring (Variable Window)

```java
import java.util.*;

public class MinimumWindow {

    public static String minWindow(String s, String t) {
        Map<Character, Integer> need = new HashMap<>();
        Map<Character, Integer> window = new HashMap<>();

        // Count characters in t
        for (char c : t.toCharArray()) {
            need.put(c, need.getOrDefault(c, 0) + 1);
        }

        int left = 0, right = 0;
        int valid = 0; // Number of characters that satisfy the condition
        int start = 0, len = Integer.MAX_VALUE;

        while (right < s.length()) {
            char c = s.charAt(right);
            right++;

            // Update window
            if (need.containsKey(c)) {
                window.put(c, window.getOrDefault(c, 0) + 1);
                if (window.get(c).equals(need.get(c))) {
                    valid++;
                }
            }

            // Try to shrink window
            while (valid == need.size()) {
                // Update result
                if (right - left < len) {
                    start = left;
                    len = right - left;
                }

                char d = s.charAt(left);
                left++;

                if (need.containsKey(d)) {
                    if (window.get(d).equals(need.get(d))) {
                        valid--;
                    }
                    window.put(d, window.get(d) - 1);
                }
            }
        }

        return len == Integer.MAX_VALUE ? "" : s.substring(start, start + len);
    }
}
```

## Algorithm Template

### Fixed Size Window Template

```java
public int fixedWindow(int[] arr, int k) {
    // Initialize window sum
    int windowSum = 0;
    for (int i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    int result = windowSum;

    // Slide window
    for (int i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        result = Math.max(result, windowSum); // or other operation
    }

    return result;
}
```

### Variable Size Window Template

```java
public int variableWindow(int[] arr, int target) {
    int left = 0, result = 0;

    for (int right = 0; right < arr.length; right++) {
        // Expand window by including arr[right]

        // Shrink window while condition is met
        while (/* condition */) {
            // Update result
            left++;
        }

        // Update result for current window
    }

    return result;
}
```

## Common Mistakes to Avoid

1. **Off-by-one errors** when calculating window boundaries
2. **Forgetting to update pointers** properly
3. **Not handling edge cases** like empty arrays or strings
4. **Incorrect condition checking** for window expansion/contraction

## Practice Problems

1. **Easy**: Maximum Average Subarray I
2. **Medium**: Longest Substring with At Most K Distinct Characters
3. **Medium**: Fruit Into Baskets
4. **Hard**: Sliding Window Maximum
5. **Hard**: Minimum Window Substring

## When to Use Sliding Window

- Problems involving contiguous subarrays/substrings
- Finding optimal solutions in arrays/strings
- When you need to avoid nested loops for better time complexity
- Problems asking for "longest", "shortest", "maximum", "minimum" in subarrays

## Key Takeaways

- Sliding window reduces time complexity from O(n²) to O(n)
- Two main types: fixed size and variable size windows
- Use two pointers to maintain window boundaries
- Perfect for optimization problems involving contiguous elements
