Problem Statement
Given a sorted array containing both negative and positive numbers, square each element and return a sorted array of these squared values.

The solution must run in O(n) time complexity. 
 Problem Explanation 
 Given a sorted array (ascending order) containing negative and positive numbers, the task is to:

Square each element (making all values positive).

Sort the squared values while maintaining an efficient time complexity.

A simple approach would be to square all elements and then sort them, but that would take O(n log n) time.

Instead, the two-pointer method allows sorting in O(n) time. 
Constraints
Input: A sorted array (ascending order) containing both positive and negative numbers.

Output: A sorted array (ascending order) of squared values.

Time Complexity: O(n) 
Approach: Two-Pointer Method 
Initialize two pointers:

One at the smallest (negative) value.

One at the largest (positive) value.

Compare squares of both elements.

Place the larger squared value at the end of the result array.

Move the corresponding pointer inward.

Repeat until all elements are placed in the result array.

Complexity Analysis
Time Complexity: O(n) (Each element is processed once).

Space Complexity: O(n) (New array for output).

Why is this Approach Efficient?
✅ Avoids sorting, which would take O(n log n).

✅ Uses two-pointer technique for an optimal O(n) solution.

✅ Efficient for large inputs compared to brute-force sorting.

🔹 How the Code Works
Two Pointers (left and right)

left starts from the smallest (most negative) number.

right starts from the largest (positive) number.

Compare Squares
Compute squares of values at left and right.

Place the larger squared value at the end of the result array.

Move the corresponding pointer inward (left++ or right--).

Repeat Until All Elements Are Processed

The process continues until all elements are placed in the output array in sorted order.

How to Run the Code?
Save the code in a JavaScript file.

Run it in a browser console or using Node.js.
