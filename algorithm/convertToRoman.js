// @ts-check

// using TypeScript to check JavaScript code

/**
 * เขียนด้วย syntax TypeScrip, Record = Object
 * @type {Record<'unitOne' | 'unitTwo' | 'unitThree' | 'unitFour', Record<string, string>>}
 */
const romanSymbol = {
  unitOne: {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
  },
  unitTwo: {
    1: 'X',
    4: 'XL',
    5: 'L',
    9: 'XC',
  },
  unitThree: {
    1: 'C',
    4: 'CD',
    5: 'D',
    9: 'CM',
  },
  unitFour: {
    1: 'M',
  },
}

/**
 * @param {number} num
 * @returns {string}
 */
function convertToRoman(num) {
  const numInValueOrder = splitNumToArray(num)
  const romanArray = numInValueOrder.map((numStr, index) => {
    // ต้องการเพื่อหา symbolUnit ลำดับถัดไป แต่ข้อมูล romanSymbol เป็น object ไม่เหมาะที่จะหาลำกับถัดไป เพราะ object ไม่เน้นที่ลำดับ
    // เลยเปลี่ยนเป็น array ด้วยวิธี Object.keys() จะได้ Array ของ key หรือ Array ของ romanSymbol value ข้างใน array เป็น string
    const symbolUnit = Object.keys(romanSymbol)[index]
    return numToRoman(numStr, romanSymbol[symbolUnit])
  })
  return romanNum(romanArray)
}

/**
 * convert number to array of number
 * and sort it by unit value from lower to higher
 * @param {number} num
 */
function splitNumToArray(num) {
  const numArray = String(num).split('')
  return numArray.reverse()
}

/**
 *
 * @param {string} numInStr
 * @param {object} unitObj
 * @returns {string}
 */
function numToRoman(numInStr, unitObj) {
  const num = Number(numInStr)
  if (num === 0) {
    return ''
  } else if (num >= 1 && num < 4) {
    // .repeat(count) create and return new string
    // with the given string repeated 'count' times
    return unitObj[1].repeat(num)
  } else if (num === 4) {
    return unitObj[4]
  } else if (num === 5) {
    return unitObj[5]
  } else if (num > 5 && num < 9) {
    return unitObj[5] + unitObj[1].repeat(num - 5)
  }
  return unitObj[9]
}

/**
 * convert array of roman number to string roman number
 * @param {string[]} romanArray
 * @returns {string}
 */
function romanNum(romanArray) {
  return romanArray.reverse().join('')
}

module.exports = { convertToRoman }
