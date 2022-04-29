// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// Object.keys() method returns an array of a given object's own enumerable property names

// 1 ใช้ได้แค่กรณีที่ source มี key แค่ 1 อัน
function whatIsInAName(collection, source) {
  let keySource = Object.keys(source)
  let resultArr = collection.filter((obj) => {
    if (obj.hasOwnProperty(keySource)) {
      return obj[keySource] === source[keySource]
    }
  })
  return resultArr
}

// 2 
function whatIsInAName(collection, source) {
  let keySource = Object.keys(source)
  let resultArr = collection.filter((obj) => {
    for (let i = 0; i < keySource.length; i++) {
      if (!obj.hasOwnProperty(keySource[i]) || obj[keySource[i]] !== source[keySource[i]]) {
        return false
      }
    }
    return true
  })
  return resultArr
}



whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) 
// return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) 
// return [{ "apple": 1, "bat": 2, "cookie": 2 }]