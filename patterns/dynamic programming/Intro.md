# Dynamic Programming Study Guide

## 📚 Overview

Dynamic Programming (DP) is an algorithmic optimization technique that solves complex problems by breaking them down into simpler subproblems and storing their solutions to avoid redundant calculations.

---

## 🎯 Core Principles

### 1. **Memoization (Top-Down Approach)**

Memoization follows a **top-down** recursive approach where we solve the problem by breaking it into subproblems and cache the results.

#### How It Works:

- Start with the original problem
- Recursively break it down into smaller subproblems
- Store (cache) the result of each subproblem
- Before solving a subproblem, check if it's already been computed
- If yes, return the cached value; if no, compute and store it

#### Time Complexity Improvement:

```
Naive Recursion:  O(2^n) - exponential growth
With Memoization: O(n) - linear time
```

**Why the improvement?**  
Without memoization, each recursive call spawns two more calls (e.g., `fib(n-1)` and `fib(n-2)`), leading to exponential time complexity. With memoization, we calculate each subproblem only once and reuse the result, reducing redundant calculations.

#### Example: Fibonacci Sequence

```
Without Memoization:
fib(5)
├── fib(4)
│   ├── fib(3)
│   │   ├── fib(2) ← computed
│   │   └── fib(1)
│   └── fib(2) ← computed again!
└── fib(3) ← entire subtree recomputed!
    ├── fib(2) ← computed again!
    └── fib(1)

With Memoization:
fib(5)
├── fib(4)
│   ├── fib(3)
│   │   ├── fib(2) ← computed & stored
│   │   └── fib(1) ← computed & stored
│   └── fib(2) ← retrieved from cache ✓
└── fib(3) ← retrieved from cache ✓
```

---

### 2. **Tabulation (Bottom-Up Approach)**

Tabulation follows a **bottom-up** iterative approach where we solve smaller subproblems first and build up to the final solution.

#### How It Works:

- Create a table (usually an array) to store results
- Start with the smallest subproblems (base cases)
- Iteratively solve larger subproblems using previously computed values
- The final answer is typically in the last position of the table

#### Characteristics:

- **Iterative** (uses loops instead of recursion)
- **Space-efficient** (no recursion stack overhead)
- **Predictable** (easier to optimize space usage)

#### Example: Fibonacci with Tabulation

```
Table: [0, 1, _, _, _, _]
Step 1: [0, 1, 1, _, _, _]  (0 + 1)
Step 2: [0, 1, 1, 2, _, _]  (1 + 1)
Step 3: [0, 1, 1, 2, 3, _]  (1 + 2)
Step 4: [0, 1, 1, 2, 3, 5]  (2 + 3)
```

---

## 🔄 Comparison: Memoization vs Tabulation

| Aspect             | Memoization                               | Tabulation                          |
| ------------------ | ----------------------------------------- | ----------------------------------- |
| **Approach**       | Top-Down (Recursive)                      | Bottom-Up (Iterative)               |
| **Implementation** | Recursion + Cache                         | Loops + Table                       |
| **Space Usage**    | Cache + Recursion Stack                   | Table only                          |
| **When to Use**    | When not all subproblems need solving     | When all subproblems must be solved |
| **Ease of Coding** | More intuitive, follows problem structure | Requires careful ordering           |

---

## 💡 When to Use Dynamic Programming

Use DP when a problem has:

1. **Overlapping Subproblems** - Same subproblems are solved multiple times
2. **Optimal Substructure** - Optimal solution can be constructed from optimal solutions of subproblems

### Common DP Problems:

- Fibonacci sequence
- Climbing stairs
- Coin change
- Longest common subsequence
- Knapsack problem
- Matrix chain multiplication

---
