// you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// check if item is truthy or not by using !!item or Boolean(item)

// .some() ถ้า return true จะหยุดลูป
// .every() ถ้า return false จะหยุดลูป

// 1
function truthCheck(collection, pre) {
  return collection.every((object) => object[pre])
}

// 2
function truthCheck(collection, pre) {
  return collection.every((object) => Boolean(object[pre]))
}