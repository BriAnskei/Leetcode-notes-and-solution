# Stack One Pass Algorithm

## Overview

One pass algorithms with stacks are techniques that solve problems in a single traversal of the input data while using a stack to maintain necessary information. These algorithms are highly efficient and elegant.

## Key Characteristics

- **Single traversal**: O(n) time complexity
- **Stack usage**: Maintain state and enable backtracking
- **Optimal efficiency**: Each element is pushed and popped at most once
- **Space trade-off**: Use O(n) extra space for O(n) time

## Common Patterns

### 1. Monotonic Stack Pattern

Maintains elements in monotonic (increasing/decreasing) order.

#### Next Greater Element

```java
public int[] nextGreaterElements(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    Deque<Integer> stack = new ArrayDeque<>();

    // One pass from right to left
    for (int i = n - 1; i >= 0; i--) {
        // Maintain decreasing stack
        while (!stack.isEmpty() && stack.peek() <= nums[i]) {
            stack.pop();
        }

        result[i] = stack.isEmpty() ? -1 : stack.peek();
        stack.push(nums[i]);
    }

    return result;
}
// Time: O(n), Space: O(n)
```

#### Next Greater Element (Circular Array)

```java
public int[] nextGreaterElements(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    Arrays.fill(result, -1);
    Deque<Integer> stack = new ArrayDeque<>();

    // One pass, but simulate circular by going 2*n
    for (int i = 0; i < 2 * n; i++) {
        int num = nums[i % n];

        while (!stack.isEmpty() && nums[stack.peek()] < num) {
            result[stack.pop()] = num;
        }

        if (i < n) {
            stack.push(i);
        }
    }

    return result;
}
// Time: O(n), Space: O(n)
```

### 2. Daily Temperatures

```java
public int[] dailyTemperatures(int[] temperatures) {
    int n = temperatures.length;
    int[] result = new int[n];
    Deque<Integer> stack = new ArrayDeque<>(); // Store indices

    // One pass from left to right
    for (int i = 0; i < n; i++) {
        // Pop indices with smaller temperatures
        while (!stack.isEmpty() &&
               temperatures[i] > temperatures[stack.peek()]) {
            int prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }

    return result;
}
// Time: O(n), Space: O(n)
```

### 3. Largest Rectangle in Histogram

```java
public int largestRectangleArea(int[] heights) {
    Deque<Integer> stack = new ArrayDeque<>();
    int maxArea = 0;
    int n = heights.length;

    // One pass through heights
    for (int i = 0; i <= n; i++) {
        int currentHeight = (i == n) ? 0 : heights[i];

        while (!stack.isEmpty() && heights[stack.peek()] > currentHeight) {
            int height = heights[stack.pop()];
            int width = stack.isEmpty() ? i : i - stack.peek() - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
}
// Time: O(n), Space: O(n)
```

### 4. Trapping Rain Water

```java
public int trap(int[] height) {
    Deque<Integer> stack = new ArrayDeque<>();
    int water = 0;

    // One pass from left to right
    for (int i = 0; i < height.length; i++) {
        while (!stack.isEmpty() && height[i] > height[stack.peek()]) {
            int bottom = stack.pop();

            if (stack.isEmpty()) break;

            int left = stack.peek();
            int h = Math.min(height[left], height[i]) - height[bottom];
            int w = i - left - 1;
            water += h * w;
        }
        stack.push(i);
    }

    return water;
}
// Time: O(n), Space: O(n)
```

## Advanced One Pass Patterns

### 5. Valid Parentheses

```java
public boolean isValid(String s) {
    Deque<Character> stack = new ArrayDeque<>();

    // One pass through string
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '[' || c == '{') {
            stack.push(c);
        } else {
            if (stack.isEmpty()) return false;

            char top = stack.pop();
            if ((c == ')' && top != '(') ||
                (c == ']' && top != '[') ||
                (c == '}' && top != '{')) {
                return false;
            }
        }
    }

    return stack.isEmpty();
}
// Time: O(n), Space: O(n)
```

### 6. Remove Duplicate Letters

```java
public String removeDuplicateLetters(String s) {
    int[] count = new int[26];
    boolean[] inStack = new boolean[26];
    Deque<Character> stack = new ArrayDeque<>();

    // Count frequency
    for (char c : s.toCharArray()) {
        count[c - 'a']++;
    }

    // One pass processing
    for (char c : s.toCharArray()) {
        count[c - 'a']--;

        if (inStack[c - 'a']) continue;

        // Remove larger characters that appear later
        while (!stack.isEmpty() && stack.peek() > c &&
               count[stack.peek() - 'a'] > 0) {
            char removed = stack.pop();
            inStack[removed - 'a'] = false;
        }

        stack
```
