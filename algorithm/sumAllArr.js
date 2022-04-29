// Return the sum of those two numbers plus the sum of all the numbers between them.

function sumAll(arr) {
  let sumArr = 0
  // Math.max() returns the largest-valued number
  // Math.min() returns the lowest-valued number
  const maxNum = Math.max(arr[0], arr[1])
  const minNum = Math.min(arr[0], arr[1])
  for (let n = minNum; n <= maxNum; n++) {
    sumArr = sumArr + n
  }
  return sumArr
}

sumAll([1, 4]) // return 10.
sumAll([10, 5]) // return 45.