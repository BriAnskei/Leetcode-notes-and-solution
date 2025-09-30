# Longest Substring with Repeating Characters

## Problem Description

This solution finds the length of the longest substring where every character appears at least `k` times. This is a classic LeetCode problem (Problem 395: Longest Substring with At Least K Repeating Characters).

**Example:**

- Input: `s = "aaabb"`, `k = 3`
- Output: `3` (substring "aaa")

## Solution Overview

This implementation uses a **Sliding Window with Fixed Constraints** pattern, specifically employing multiple passes with different target unique character counts.

## Algorithm Pattern: Multi-Pass Sliding Window

### Core Concept

Instead of trying to solve the problem in one pass (which would be complex due to the dynamic nature of the constraint), this solution uses a clever approach:

1. **Iterate through all possible numbers of unique characters** (1 to 26, since we're dealing with lowercase English letters)
2. **For each target unique count**, use a sliding window to find the longest valid substring
3. **A valid substring** has exactly `targetUnique` distinct characters, and each character appears at least `k` times

### Why This Works

The key insight is that if we fix the number of unique characters in our window, the sliding window becomes much more manageable. We can:

- Expand the window when we have fewer than the target unique characters
- Shrink the window when we exceed the target unique characters
- Check validity when we have exactly the target number of unique characters

## Code Breakdown

### Outer Loop - Target Unique Characters

```javascript
for (let targetUnique = 1; targetUnique <= 26; targetUnique++) {
```

- Tries every possible number of unique characters (1-26)
- Each iteration finds the longest valid substring with exactly `targetUnique` distinct characters

### Data Structures

```javascript
const freq = new Array(26).fill(0); // Frequency count for each character (a-z)
let left = 0,
  right = 0; // Sliding window pointers
let unique = 0; // Current number of unique characters in window
let countAtLeastK = 0; // Number of characters that appear >= k times
```

### Window Expansion (Right Pointer)

```javascript
const idxRight = s.charCodeAt(right) - 97; // Convert char to index (a=0, b=1, ...)
if (freq[idxRight] === 0) unique++; // New unique character
freq[idxRight]++; // Increment frequency
if (freq[idxRight] === k) countAtLeastK++; // Character now satisfies k requirement
```

### Window Contraction (Left Pointer)

```javascript
while (unique > targetUnique) {
  const idxLeft = s.charCodeAt(left) - 97;
  if (freq[idxLeft] === k) countAtLeastK--; // Character no longer satisfies k
  freq[idxLeft]--; // Decrement frequency
  if (freq[idxLeft] === 0) unique--; // Character completely removed
  left++;
}
```

### Validity Check

```javascript
if (unique === targetUnique && unique === countAtLeastK) {
  maxLen = Math.max(maxLen, right - left);
}
```

A window is valid when:

- We have exactly `targetUnique` distinct characters
- All characters appear at least `k` times (`unique === countAtLeastK`)

## Time & Space Complexity

- **Time Complexity**: O(26 × n) = O(n), where n is the length of the string

  - 26 passes (constant factor)
  - Each pass processes each character at most twice (once by right pointer, once by left pointer)

- **Space Complexity**: O(1)
  - Fixed-size frequency array of 26 elements
  - A few integer variables

## Key Insights

1. **Fixed Constraint Sliding Window**: By fixing the number of unique characters, we transform a complex problem into a standard sliding window problem

2. **Character Indexing**: Uses `s.charCodeAt(i) - 97` to map characters 'a'-'z' to indices 0-25

3. **Two Counters Strategy**:

   - `unique`: tracks distinct characters
   - `countAtLeastK`: tracks characters meeting the frequency requirement

4. **Optimal Substructure**: The longest valid substring with any number of unique characters will be found in one of the 26 passes

## Alternative Approaches

While this solution is elegant and efficient, other approaches include:

- **Divide and Conquer**: Recursively split the string at characters that don't meet the frequency requirement
- **Dynamic Programming**: Though more complex and less efficient for this problem

## Usage Example

```javascript
console.log(longestSubstring("aaabb", 3)); // Output: 3
console.log(longestSubstring("ababbc", 2)); // Output: 5
console.log(longestSubstring("weitong", 2)); // Output: 0
```

This solution demonstrates how constraining one variable (number of unique characters) can simplify complex sliding window problems.
