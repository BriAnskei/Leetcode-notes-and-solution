# Sliding Window Median

A JavaScript implementation for finding the median of elements in a sliding window using a dual-heap approach with lazy deletion.

## Overview

This implementation solves the sliding window median problem efficiently by maintaining two balanced heaps and using lazy deletion to handle element removal without expensive heap operations.

## How It Works

### Core Components

#### 1. CustomHeap Class

A generic binary heap implementation that supports custom comparison functions.

**Key Features:**

- **Configurable ordering**: Accepts a comparison function to create either min-heap or max-heap
- **Standard heap operations**: `push()`, `pop()`, `peek()`, `size()`
- **Binary heap structure**: Uses array representation where parent is at `(i-1)/2` and children at `2*i+1` and `2*i+2`

**Heap Operations:**

- **Sift Up (`_siftUp`)**: After insertion, bubbles element up to maintain heap property
- **Sift Down (`_siftDown`)**: After removal, sinks element down to restore heap order

#### 2. SlidingWindowMedian Class

Implements the two-heap pattern with lazy deletion for efficient median tracking.

**Data Structures:**

- **`small`**: Max-heap storing the smaller half of elements
- **`large`**: Min-heap storing the larger half of elements
- **`delayed`**: Map tracking elements marked for lazy deletion
- **Size counters**: `smallSize` and `largeSize` track logical sizes (excluding deleted elements)

### Algorithm Mechanics

#### Dual-Heap Pattern

The algorithm maintains two heaps such that:

- All elements in `small` ≤ all elements in `large`
- Heaps are balanced: `|smallSize - largeSize| ≤ 1`
- For odd window sizes: `smallSize = largeSize + 1`
- For even window sizes: `smallSize = largeSize`

#### Lazy Deletion Strategy

Instead of immediately removing elements from heaps (expensive O(k) operation), the algorithm:

1. **Marks elements for deletion** in the `delayed` map
2. **Tracks logical sizes** separately from physical heap sizes
3. **Prunes heaps lazily** when deleted elements reach the top
4. **Maintains balance** based on logical sizes, not physical heap sizes

#### Core Operations

**Adding Elements (`addNum`)**:

1. Determine which heap based on comparison with `small.peek()`
2. Insert into appropriate heap
3. Increment corresponding size counter
4. Rebalance heaps if necessary

**Removing Elements (`removeNum`)**:

1. Mark element for lazy deletion in `delayed` map
2. Decrement appropriate size counter
3. If removed element is at heap top, trigger immediate pruning
4. Rebalance heaps based on logical sizes

**Pruning (`_prune`)**:

- Removes all delayed elements from heap top
- Only runs when deleted elements are accessible (at heap root)
- Maintains heap property by only removing from top

**Rebalancing (`_rebalance`)**:

- Moves elements between heaps to maintain size invariants
- Triggers pruning after transfers to clean up delayed elements
- Uses logical sizes for balance decisions

**Finding Median (`findMedian`)**:

- **Odd window size**: Return `small.peek()` (max of smaller half)
- **Even window size**: Return average of both heap tops

## Time Complexity

- **Add/Remove operations**: O(log k) amortized
- **Find median**: O(1)
- **Overall sliding window**: O(n log k) where n = array length, k = window size

The lazy deletion approach avoids the O(k) cost of searching and removing arbitrary elements from heaps.

## Space Complexity

- O(k) for storing window elements in heaps
- O(k) worst case for delayed deletion map

## Usage Example

```javascript
// Find median of sliding window of size 3
const result = medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
// Returns array of medians for each window position
```

## Design Patterns Used

1. **Two-Heap Pattern**: Efficiently maintains running median
2. **Lazy Deletion**: Defers expensive removals until necessary
3. **Template/Strategy Pattern**: CustomHeap accepts comparison functions
4. **Encapsulation**: Private methods prefixed with underscore
5. **Separation of Concerns**: Distinct classes for heap operations vs median logic

## Key Insights

- **Lazy deletion** trades memory for time complexity, avoiding O(k) removals
- **Logical size tracking** allows balance decisions independent of physical heap state
- **Immediate pruning** when deleted elements reach heap tops prevents unbounded growth
- **Two-heap invariant** ensures median is always accessible in O(1) time
