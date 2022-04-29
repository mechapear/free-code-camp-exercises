// a - b > 0 sort b before a
// a - b < 0 sort a before b
// a - b = 0 keep original order of a and b
//A side effect of the sort method is that it changes the order of the elements in the original array

// The function should return the sorted array.
function alphabeticalOrder(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1
  })
}

alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']) // return ['a','a','c','d','g','z']

// reverse
// เปลี่ยนเป็น a < b return 1 เพื่อเรียงสลับ เป็น b ก่อน a
function reverseAlpha(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? 1 : -1
  })
}

reverseAlpha(['l', 'h', 'z', 'b', 's']) // return ['z', 's', 'l', 'h', 'b']

// Return a Sorted Array Without Changing the Original Array
const globalArray = [5, 6, 3, 2, 9]

function nonMutatingSort(arr) {
  let sortArr = [...arr]
  return sortArr.sort(function (a, b) {
    return a - b
  })
}

nonMutatingSort(globalArray) // return [2, 3, 5, 6, 9]
