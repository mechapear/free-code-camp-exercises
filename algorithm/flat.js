// Flatten a nested array. You must account for varying levels of nesting.

// 1
// flat(depth level) method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// default depth level = 1
// depth level = infinity ลงไปจนลึกสุด
// ถ้าเป็นทำงานจริง ต้องดูว่า วิธีที่เราใช้รองรับ browser อะไรบ้าง ควรรองรับให้มากที่สุด เพราะงั้นบางครั้งก็ต้องใช้ library มาช่วย
// อย่างวิธี .flat ก็ใช้ lodash วิธี .flattenDepth แทน
function steamrollArray(arr) {
  return arr.flat(Infinity)
}

// 2
function steamrollArray(arr, resultArr = []) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      steamrollArray(item, resultArr)
    } else {
      resultArr.push(item)
    }
  })
  return resultArr
}

// 3
function steamrollArray(arr, resultArr = []) {
  let queue = [...arr]

  // จำวนลูปเมื่อ queue ไม่ว่าง queue.length > 0
  // while statement creates a loop that executes a specified statement as long as the test condition evaluates to true
  while (queue.length > 0) {
    const item = queue.shift()
    // ถ้า item เป็น [] จะ destructuring ออกมาใส่ใน queue แล้วลูปต่อ ([] จะหายไป 1 ชั้น)
    if (Array.isArray(item)) {
      queue = queue.concat(item)
    } else {
      // ถ้า item ไม่ใช่ [] จะ push เข้าไปใน resultArr
      resultArr.push(item)
    }
  }
  return resultArr
}

steamrollArray([1, [2], [3, [[4]]]]) // return [1, 2, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]) // return [1, {}, 3, 4]
steamrollArray([[['a']], [['b']]]) // return ["a", "b"]
