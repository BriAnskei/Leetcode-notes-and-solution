# Two Pointers Technique

## Overview
The two pointers technique is an efficient algorithmic approach that uses two pointers to traverse a data structure (typically an array or linked list). This approach can often reduce time complexity from O(n²) to O(n).

## When to Use
- Searching for pairs in a sorted array
- Detecting cycles in linked lists
- Finding subarrays that satisfy certain conditions
- String manipulation problems
- Problems involving palindromes

## Common Patterns

### 1. Opposite Directional Movement
Two pointers start from opposite ends of an array and move toward each other.

```java
public int[] twoSumSorted(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;
    
    while (left < right) {
        int currentSum = nums[left] + nums[right];
        
        if (currentSum == target) {
            return new int[] {left, right};
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return new int[] {-1, -1}; // No solution found
}
```

### 2. Same Direction Movement
Two pointers move in the same direction, often at different speeds.

```java
public int removeDuplicates(int[] nums) {
    if (nums.length == 0) {
        return 0;
    }
    
    int slow = 0;
    
    for (int fast = 1; fast < nums.length; fast++) {
        if (nums[fast] != nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    
    return slow + 1; // Length of array without duplicates
}
```

### 3. Fast and Slow Pointers
Useful for cycle detection in linked lists and finding the middle element.

```java
public ListNode detectCycle(ListNode head) {
    if (head == null || head.next == null) {
        return null;
    }
    
    // Detect if there is a cycle
    ListNode slow = head;
    ListNode fast = head;
    boolean hasCycle = false;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    
    // If no cycle, return null
    if (!hasCycle) {
        return null;
    }
    
    // Find the start of the cycle
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}
```

### 4. Sliding Window
A variation of the two-pointer technique where we maintain a "window" between the two pointers.

```java
public int maxSubArraySum(int[] nums, int k) {
    if (nums.length < k) {
        return -1;
    }
    
    // Calculate sum of first k elements
    int maxSum = 0;
    for (int i = 0; i < k; i++) {
        maxSum += nums[i];
    }
    
    int windowSum = maxSum;
    for (int i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}
```

## Tips for Using Two Pointers

1. **Determine the Movement Pattern**: Choose the right pattern based on the problem.
   
2. **Initialize Pointers**: Set the initial positions of your pointers strategically.
   
3. **Define the Movement Logic**: When and how should each pointer move?
   
4. **Handle Edge Cases**: Consider empty arrays, single-element arrays, etc.
   
5. **Consider Sorted vs. Unsorted**: Some two-pointer techniques require sorted data.

## Common Problems Solved with Two Pointers

- Two Sum
- Three Sum
- Container With Most Water
- Remove Duplicates
- Palindrome Verification
- Merge Sorted Arrays
- Reverse Array/String
- Cyclic Detection in Linked Lists

## Time and Space Complexity

- **Time Complexity**: Usually O(n) where n is the size of the input array or string
- **Space Complexity**: Usually O(1) as we only use two pointers regardless of input size

## When Not to Use

Two pointers might not be optimal for:
- Problems requiring complex data structures
- Non-sequential access patterns
- When multiple passes through the data are required