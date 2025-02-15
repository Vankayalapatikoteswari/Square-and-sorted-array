// script.js

function sortedSquares() {
    // Get user input and convert it to an array of numbers
    let input = document.getElementById("inputArray").value;
    let arr = input.split(',').map(num => parseInt(num.trim()));

    let left = 0,
        right = arr.length - 1;
    let result = new Array(arr.length);
    let index = right; // Start from the end of the result array

    // Two pointers approach
    while (left <= right) {
        let leftSquare = arr[left] * arr[left];
        let rightSquare = arr[right] * arr[right];

        // Compare squares and place the larger one at the current index
        if (leftSquare > rightSquare) {
            result[index--] = leftSquare;
            left++;
        } else {
            result[index--] = rightSquare;
            right--;
        }
    }

    // Display the sorted squared array in the output section
    document.getElementById("result").textContent = "Sorted Squared Array: " + result.join(", ");
}
