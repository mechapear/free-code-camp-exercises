// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr, ...protectItem) {
  let needToRemove = arr.filter((item) => !protectItem.includes(item))
  return needToRemove
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
// return [1,1]

destroyer(["tree", "hamburger", 53], "tree", 53) 
// return ["hamburger"]

destroyer([3, 5, 1, 2, 2], 2, 3, 5) 
// return [1]