//  return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  // .includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
  let arr1Diff = arr1.filter(item => !arr2.includes(item))
  let arr2Diff = arr2.filter(item => !arr1.includes(item))

  // .concat() method is used to merge two or more arrays, returns a new array
  let twoDiff = arr1Diff.concat(arr2Diff)
  return twoDiff
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) 
// return [4]
diffArray([1, "calf", 3, "piglet"], [7, "filly"]) 
// return [1, "calf", 3, "piglet", 7, "filly"]
