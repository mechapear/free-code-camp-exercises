// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// 1
function uniteUnique(...arr) {
  // flat(depth level) method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
  // default depth level = 1
  // depth level = infinity ลงไปจนลึกสุด
  // ถ้าเป็นทำงานจริง ต้องดูว่า วิธีที่เราใช้รองรับ browser อะไรบ้าง ควรรองรับให้มากที่สุด เพราะงั้นบางครั้งก็ต้องใช้ liibrary มาช่วย 
  // อย่างวิธี .flat ก็ใช้ lodash วิธี .flattenDepth แทน
  const flatArr = arr.flat(Infinity)

  // Set object lets you store unique values of any type, whether primitive values or object references.
  const uniqueArr = [...new Set(flatArr)]
  return uniqueArr
}

// 2
function uniteUnique(...arr) {
  const occurred = {}
  const flatten = arr.flat(Infinity)
  const uniq = flatten.filter((item) => {
    if (occurred[item]) return false
    occurred[item] = true
    return true
  })
  return uniq
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
// return [1, 3, 2, 5, 4]

uniteUnique([1, 3, 2], [5, 4], [5, 6])
// return [1, 3, 2, 5, 4, 6]

uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])
// return [1, 3, 2, 5, 4]
