// The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it.
// An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// 1

const squareList = (arr) => {
  return arr.reduce((newArr, num) => {
    let isPositiveInteger = Number.isInteger(num) && num > 0
    if (isPositiveInteger) {
      newArr.push(num * num)
    }
    return newArr
  }, [])
}

squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])
// return [16, 1764, 36]
squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])
// return [9, 100, 49]

// 2

const squareList = (arr) => {
  let positiveIntegerArr = arr.filter((num) => {
    return Number.isInteger(num) && num > 0
  })

  // Use the Math.pow() Method to Square a Number in JavaScript = num*num
  let squareArr = positiveIntegerArr.map((num) => Math.pow(num, 2))

  return squareArr
}
