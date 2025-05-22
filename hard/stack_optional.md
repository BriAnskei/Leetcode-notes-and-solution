# Stack (Optional) Techniques

## Overview

Stack optional techniques refer to problems where using a stack is one possible approach among several alternatives. These problems can often be solved with stacks for clarity and efficiency, but may also have iterative, recursive, or other algorithmic solutions.

## When Stack is Optional

### 1. **Alternative Approaches Available**

- Recursion vs Iterative with Stack
- Two Pointers vs Stack
- Dynamic Programming vs Stack with Memoization
- Mathematical Formula vs Stack-based Calculation

### 2. **Problem Characteristics**

- Multiple valid solution strategies
- Stack provides clarity but not necessarily optimal complexity
- Trade-offs between space and time complexity
- Different approaches for different constraints

## Categories of Optional Stack Problems

### 1. Recursion vs Stack Conversion

#### Tree Traversals

```java
// Recursive Inorder (Natural approach)
public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    inorderHelper(root, result);
    return result;
}

private void inorderHelper(TreeNode node, List<Integer> result) {
    if (node == null) return;
    inorderHelper(node.left, result);
    result.add(node.val);
    inorderHelper(node.right, result);
}

// Iterative with Stack (Optional approach)
public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    Deque<TreeNode> stack = new ArrayDeque<>();
    TreeNode current = root;

    while (current != null || !stack.isEmpty()) {
        while (current != null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.add(current.val);
        current = current.right;
    }

    return result;
}

// Morris Traversal (Space-optimal alternative)
public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    TreeNode current = root;

    while (current != null) {
        if (current.left == null) {
            result.add(current.val);
            current = current.right;
        } else {
            TreeNode predecessor = current.left;
            while (predecessor.right != null && predecessor.right != current) {
                predecessor = predecessor.right;
            }

            if (predecessor.right == null) {
                predecessor.right = current;
                current = current.left;
            } else {
                predecessor.right = null;
                result.add(current.val);
                current = current.right;
            }
        }
    }

    return result;
}
```

#### Path Sum Problems

```java
// Recursive approach (Natural)
public boolean hasPathSum(TreeNode root, int targetSum) {
    if (root == null) return false;

    if (root.left == null && root.right == null) {
        return root.val == targetSum;
    }

    return hasPathSum(root.left, targetSum - root.val) ||
           hasPathSum(root.right, targetSum - root.val);
}

// Iterative with Stack (Optional)
public boolean hasPathSum(TreeNode root, int targetSum) {
    if (root == null) return false;

    Deque<TreeNode> nodeStack = new ArrayDeque<>();
    Deque<Integer> sumStack = new ArrayDeque<>();

    nodeStack.push(root);
    sumStack.push(targetSum - root.val);

    while (!nodeStack.isEmpty()) {
        TreeNode node = nodeStack.pop();
        int remainingSum = sumStack.pop();

        if (node.left == null && node.right == null && remainingSum == 0) {
            return true;
        }

        if (node.left != null) {
            nodeStack.push(node.left);
            sumStack.push(remainingSum - node.left.val);
        }

        if (node.right != null) {
            nodeStack.push(node.right);
            sumStack.push(remainingSum - node.right.val);
        }
    }

    return false;
}
```

### 2. Two Pointers vs Stack

#### Valid Palindrome (Parentheses)

```java
// Stack approach (Optional)
public boolean isPalindrome(String s) {
    Deque<Character> stack = new ArrayDeque<>();
    String cleaned = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

    int mid = cleaned.length() / 2;

    // Push first half to stack
    for (int i = 0; i < mid; i++) {
        stack.push(cleaned.charAt(i));
    }

    // Compare second half with stack
    int start = cleaned.length() % 2 == 0 ? mid : mid + 1;
    for (int i = start; i < cleaned.length(); i++) {
        if (stack.isEmpty() || stack.pop() != cleaned.charAt(i)) {
            return false;
        }
    }

    return true;
}

// Two Pointers approach (Preferred)
public boolean isPalindrome(String s) {
    String cleaned = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
    int left = 0, right = cleaned.length() - 1;

    while (left < right) {
        if (cleaned.charAt(left) != cleaned.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
```

### 3. Mathematical vs Stack Approach

#### Reverse Integer

```java
// Stack approach (Optional)
public int reverse(int x) {
    if (x == 0) return 0;

    boolean negative = x < 0;
    x = Math.abs(x);

    Deque<Integer> stack = new ArrayDeque<>();
    while (x > 0) {
        stack.push(x % 10);
        x /= 10;
    }

    long result = 0;
    long multiplier = 1;

    while (!stack.isEmpty()) {
        result += stack.pop() * multiplier;
        multiplier *= 10;

        if (result > Integer.MAX_VALUE) return 0;
    }

    return negative ? -(int)result : (int)result;
}

// Mathematical approach (Preferred)
public int reverse(int x) {
    long result = 0;

    while (x != 0) {
        result = result * 10 + x % 10;
        x /= 10;
    }

    return (result > Integer.MAX_VALUE || result < Integer.MIN_VALUE) ? 0 : (int)result;
}
```

### 4. DP vs Stack with Memoization

#### Decode Ways

```java
// Stack with memoization (Optional)
public int numDecodings(String s) {
    return decodeHelper(s, 0, new HashMap<>());
}

private int decodeHelper(String s, int index, Map<Integer, Integer> memo) {
    if (memo.containsKey(index)) {
        return memo.get(index);
    }

    if (index == s.length()) return 1;
    if (s.charAt(index) == '0') return 0;

    int ways = decodeHelper(s, index + 1, memo);

    if (index + 1 < s.length()) {
        int twoDigit = Integer.parseInt(s.substring(index, index + 2));
        if (twoDigit <= 26) {
            ways += decodeHelper(s, index + 2, memo);
        }
    }

    memo.put(index, ways);
    return ways;
}

// Dynamic Programming (Preferred)
public int numDecodings(String s) {
    if (s == null || s.length() == 0) return 0;

    int n = s.length();
    int[] dp = new int[n + 1];
    dp[0] = 1;
    dp[1] = s.charAt(0) != '0' ? 1 : 0;

    for (int i = 2; i <= n; i++) {
        int oneDigit = Integer.parseInt(s.substring(i - 1, i));
        int twoDigits = Integer.parseInt(s.substring(i - 2, i));

        if (oneDigit >= 1) {
            dp[i] += dp[i - 1];
        }

        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
}
```

## Advanced Optional Stack Techniques

### 5. Simulation vs Stack

#### Asteroid Collision

```java
// Stack approach (Clear and preferred)
public int[] asteroidCollision(int[] asteroids) {
    Deque<Integer> stack = new ArrayDeque<>();

    for (int asteroid : asteroids) {
        boolean destroyed = false;

        while (!stack.isEmpty() && asteroid < 0 && stack.peek() > 0) {
            if (stack.peek() < -asteroid) {
                stack.pop();
            } else if (stack.peek() == -asteroid) {
                stack.pop();
                destroyed = true;
                break;
            } else {
                destroyed = true;
                break;
            }
        }

        if (!destroyed) {
            stack.push(asteroid);
        }
    }

    return stack.stream().mapToInt(Integer::intValue).toArray();
}

// List simulation (Alternative)
public int[] asteroidCollision(int[] asteroids) {
    List<Integer> result = new ArrayList<>();

    for (int asteroid : asteroids) {
        boolean destroyed = false;

        while (!result.isEmpty() && asteroid < 0 &&
               result.get(result.size() - 1) > 0) {
            int last = result.get(result.size() - 1);

            if (last < -asteroid) {
                result.remove(result.size() - 1);
            } else if (last == -asteroid) {
                result.remove(result.size() - 1);
                destroyed = true;
                break;
            } else {
                destroyed = true;
                break;
            }
        }

        if (!destroyed) {
            result.add(asteroid);
        }
    }

    return result.stream().mapToInt(Integer::intValue).toArray();
}
```

### 6. Greedy vs Stack

#### Remove K Digits

```java
// Stack approach (Optimal)
public String removeKdigits(String num, int k) {
    Deque<Character> stack = new ArrayDeque<>();

    for (char digit : num.toCharArray()) {
        while (!stack.isEmpty() && k > 0 && stack.peek() > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    // Remove remaining digits from end
    while (k > 0 && !stack.isEmpty()) {
        stack.pop();
        k--;
    }

    // Build result
    StringBuilder sb = new StringBuilder();
    while (!stack.isEmpty()) {
        sb.append(stack.pop());
    }

    String result = sb.reverse().toString();

    // Remove leading zeros
    int i = 0;
    while (i < result.length() && result.charAt(i) == '0') {
        i++;
    }

    return i == result.length() ? "0" : result.substring(i);
}

// Greedy with StringBuilder (Alternative)
public String removeKdigits(String num, int k) {
    StringBuilder sb = new StringBuilder();

    for (char digit : num.toCharArray()) {
        while (sb.length() > 0 && k > 0 && sb.charAt(sb.length() - 1) > digit) {
            sb.deleteCharAt(sb.length() - 1);
            k--;
        }
        sb.append(digit);
    }

    // Remove remaining digits
    while (k > 0 && sb.length() > 0) {
        sb.deleteCharAt(sb.length() - 1);
        k--;
    }

    // Remove leading zeros
    while (sb.length() > 1 && sb.charAt(0) == '0') {
        sb.deleteCharAt(0);
    }

    return sb.length() == 0 ? "0" : sb.toString();
}
```

## Decision Framework

### When to Choose Stack

1. **Natural LIFO behavior** needed
2. **Nested structures** (parentheses, expressions)
3. **Backtracking** scenarios
4. **Converting recursion** to iteration
5. **Clear and readable** solution

### When to Choose Alternatives

1. **Better time/space complexity** available
2. **Simpler implementation** possible
3. **Problem has mathematical** solution
4. **Two pointers** pattern fits naturally
5. **DP optimal substructure** exists

## Comparison Table

| Problem Type     | Stack Approach        | Alternative              | When to Use Stack    |
| ---------------- | --------------------- | ------------------------ | -------------------- |
| Tree Traversal   | O(n) time, O(h) space | Recursion: O(h) implicit | Avoid stack overflow |
| Palindrome Check | O(n) time, O(n) space | Two pointers: O(1) space | Educational purposes |
| Expression Eval  | O(n) time, O(n) space | Recursive descent        | Complex expressions  |
| Parentheses      | O(n) time, O(n) space | Counter: O(1) space      | Nested/mixed types   |
| Path Problems    | O(n) time, O(h) space | DFS recursion            | Iterative preference |

## Practice Strategy

### Start with Stack When:

- Learning the problem pattern
- Need to understand the underlying structure
- Converting from recursive solution
- Debugging complex nested logic

### Optimize to Alternatives When:

- Performance is critical
- Memory is constrained
- Simpler solution exists
- Problem has mathematical insight

## Common Patterns Summary

1. **Recursion ↔ Stack**: Convert call stack to explicit stack
2. **Nested Processing**: Use stack for managing nested structures
3. **Backtracking**: Stack maintains path for backtracking
4. **Expression Parsing**: Stack handles operator precedence
5. **Simulation**: Stack models real-world LIFO behavior

The key insight is that stack is often a tool for clarity and correctness first, optimization second. Choose the approach that best fits your constraints and understanding level.
