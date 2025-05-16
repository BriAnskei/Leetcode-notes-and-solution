# Problem: Two Sum

## LeetCode Link:

[Two Sum](https://leetcode.com/problems/two-sum/)

## Difficulty:

Easy

## Pattern:

Hash Map

## Description:

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target...

## Example:

Input: nums = [2,7,11,15], target = 9  
Output: [0,1]

## Approach:

- Use a hash map to store visited elements and their indices
- For each element, check if (target - current) exists in the map

## Time Complexity:

O(n)

## Space Complexity:

O(n)

## Code (JavaScript):

```javascript
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
};
```
