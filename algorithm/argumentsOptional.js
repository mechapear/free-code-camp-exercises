// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// 1
function addTogether(itemOne, itemTwo) {
  if (typeof itemOne !== 'number') {
    return undefined
  }
  if (typeof itemTwo !== 'number') {
    return function (itemTwo) {
      if (typeof itemTwo !== 'number') {
        return undefined
      }
      return itemOne + itemTwo
    }
  }
  return itemOne + itemTwo
}

// 2
function addTogether(itemOne, itemTwo) {
  if (typeof itemOne !== 'number') return undefined
  if (itemTwo === undefined) return (itemTwo) => addTogether(itemOne, itemTwo)
  if (typeof itemTwo !== 'number') return undefined
  return itemOne + itemTwo
}
