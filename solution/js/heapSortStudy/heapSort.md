# Sliding Window Median - Complete Guide

## Overview

This solution implements a **Sliding Window Median** algorithm that efficiently finds the median of every k-sized window as it slides through an array. The key insight is using two heaps to maintain the median in O(log k) time per operation.

## Core Components

### 1. CustomHeap Class

A generic heap implementation that supports both min-heap and max-heap behavior through a custom comparator function.

```javascript
// Max-heap example: new CustomHeap((a, b) => a > b)
// Min-heap example: new CustomHeap((a, b) => a < b)
```

**Key Operations:**

- `push(val)`: Adds element and maintains heap property via sift-up
- `pop()`: Removes root element and maintains heap property via sift-down
- `peek()`: Returns root element without removal
- `_siftUp()`: Bubbles element up to maintain heap order
- `_siftDown()`: Bubbles element down to maintain heap order

### 2. SlidingWindowMedian Class

Uses two heaps to efficiently track the median:

- **small heap (max-heap)**: Stores smaller half of numbers
- **large heap (min-heap)**: Stores larger half of numbers

## Algorithm Visualization

### Initial Setup

```
Window size k = 3
Array: [1, 3, -1, -3, 5, 3, 6, 7]
```

### Step-by-Step Process

#### Step 1: Initialize first window [1, 3, -1]

```
After adding 1:
small: [1]     large: []
       ↑ median = 1

After adding 3:
small: [1]     large: [3]
       ↑              ↑
median = (1 + 3) / 2 = 2

After adding -1:
small: [1, -1] large: [3]
       ↑
median = 1 (from small.peek())
```

#### Step 2: Slide window to [3, -1, -3]

```
Remove 1, Add -3:
small: [3, -1, -3] large: []
              ↑
median = -1
```

#### Visual Representation of Heap Structure

```
Max Heap (small)          Min Heap (large)
     3                         5
   /   \                     /   \
 -1    -3                   6     7
```

### Complete Window Sliding Example

```
Array: [1, 3, -1, -3, 5, 3, 6, 7], k = 3

Window 1: [1, 3, -1]
├─ small: [1, -1] (max-heap)
├─ large: [3] (min-heap)
└─ median: 1

Window 2: [3, -1, -3]
├─ small: [-1, -3] (max-heap)
├─ large: [3] (min-heap)
└─ median: -1

Window 3: [-1, -3, 5]
├─ small: [-1, -3] (max-heap)
├─ large: [5] (min-heap)
└─ median: -1

Window 4: [-3, 5, 3]
├─ small: [-3] (max-heap)
├─ large: [3, 5] (min-heap)
└─ median: 3

Window 5: [5, 3, 6]
├─ small: [3] (max-heap)
├─ large: [5, 6] (min-heap)
└─ median: 5

Window 6: [3, 6, 7]
├─ small: [3] (max-heap)
├─ large: [6, 7] (min-heap)
└─ median: 6

Result: [1, -1, -1, 3, 5, 6]
```

## Key Algorithms Explained

### Heap Operations

#### Sift Up (for insertion)

```
       5              5              8
     /   \    →     /   \    →     /   \
    3     4        8     4        5     4
   /             /               /
  8             3               3

Insert 8: Place at end → Compare with parent → Swap if needed → Repeat
```

#### Sift Down (for deletion)

```
       8              4              5
     /   \    →     /   \    →     /   \
    5     4        5     4        8     4
   /             /               /
  3             3               3

Remove root: Move last to root → Compare with children → Swap with larger → Repeat
```

### Balancing Strategy

The algorithm maintains this invariant:

- **small.size() ≥ large.size()**
- **small.size() ≤ large.size() + 1**

```
Balanced states:
k=3: small(2) + large(1) → median = small.peek()
k=4: small(2) + large(2) → median = (small.peek() + large.peek()) / 2
```

### Lazy Deletion with Delayed Map

Instead of searching through heaps to remove elements, we use a "delayed deletion" approach:

```javascript
delayed = new Map()  // tracks elements to be removed

removeNum(5):
├─ delayed.set(5, count + 1)  // mark for deletion
├─ update size counters
└─ prune() if element is at heap top

_prune(heap):
while (heap.peek() is in delayed):
├─ remove from delayed map
└─ heap.pop()
```

## Time & Space Complexity

### Time Complexity

- **Per window slide**: O(log k)
  - addNum(): O(log k) for heap insertion
  - removeNum(): O(log k) for lazy deletion and pruning
  - rebalance(): O(log k) for heap operations
- **Overall**: O(n log k) where n = array length

### Space Complexity

- **Heaps**: O(k) for storing window elements
- **Delayed map**: O(k) in worst case
- **Total**: O(k)

## Edge Cases Handled

1. **Empty heaps**: Proper null checks in peek() operations
2. **Single element**: Handles k=1 windows correctly
3. **Even/odd window sizes**: Different median calculation logic
4. **Duplicate elements**: Delayed map handles multiple occurrences
5. **Negative numbers**: Works with any numeric values

## Usage Example

```javascript
// Example usage
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
const result = medianSlidingWindow(nums, k);
console.log(result); // [1, -1, -1, 3, 5, 6]

// Step by step breakdown:
// Window [1,3,-1]:   sorted=[−1,1,3] → median=1
// Window [3,-1,-3]:  sorted=[−3,−1,3] → median=−1
// Window [-1,-3,5]:  sorted=[−3,−1,5] → median=−1
// Window [-3,5,3]:   sorted=[−3,3,5] → median=3
// Window [5,3,6]:    sorted=[3,5,6] → median=5
// Window [3,6,7]:    sorted=[3,6,7] → median=6
```

## Why This Approach Works

1. **Two-heap strategy**: Efficiently maintains sorted order without full sorting
2. **Lazy deletion**: Avoids expensive heap search operations
3. **Size tracking**: Maintains balance without counting heap elements
4. **Pruning**: Cleans up delayed deletions when they reach heap tops

This solution elegantly handles the sliding window median problem with optimal time complexity, making it suitable for large datasets and real-time streaming scenarios.
