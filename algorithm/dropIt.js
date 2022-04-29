// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated(วนลูปเข้าไปทีละตัว) element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

// 1
function dropElements(arr, func) {
  let numIndex = -1
// .some() ถ้า return true จะหยุดลูป
  arr.some((num, index) => {
    if (func(num)) {
      numIndex = index
      return true
    }
  })

  return numIndex >= 0 ? arr.slice(numIndex) : []
}

// 2
function dropElements(arr, func) {
  // .slice(0) is the most performant way to clone an array
  // this is to prevent the original array from being mutated (by .shift())
  const result = arr.slice(0)
// .some() ถ้า return true จะหยุดลูป
  arr.some((num) => {
    if (!func(num)) {
      result.shift()
      return false
    }
    return true
  })

  return result
}



dropElements([1, 2, 3, 4], function (n) {
  return n >= 3
})
// return [3, 4]

dropElements([1, 2, 3, 4], function (n) {
  return n > 5
})
// return []

dropElements([1, 2, 3], function (n) {
  return n > 0
})
// return [1, 2, 3]
