//  Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.

// 1
function pairElement(str) {
  const arrStr = str.split('')
  const basePair = arrStr.map((item) => {
    if (item === 'A') {
      return [item, 'T']
    } else if (item === 'T') {
      return [item, 'A']
    } else if (item === 'C') {
      return [item, 'G']
    } else if (item === 'G') {
      return [item, 'C']
    }
  })
  return basePair
}

pairElement('ATCGA')
// return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement('CTCTA')
// return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

// 2
const pair = {
  C: 'G',
  G: 'C',
  A: 'T',
  T: 'A',
}

function pairElement2(str) {
  const arrStr = str.split('')
  const basePair = arrStr.map((item) => [item, pair[item]])
  return basePair
}

// 3 รับค่า pairConfig เผื่ออนาคตจะมีการจับคู่ในรูปแบบอื่นๆ
const pairElement3 = (str, pairConfig) => {
  const arrStr = str.split('')
  const basePair = arrStr.map((item) => {
    return [item, pairConfig[item]]
  })
  return basePair
}

// 4 เขียนแบบ curry ที่รู้ค่า pairConfig ก่อนแล้ว รับแค่ค่า str
// เวลา call function จะเป็น createPairElement2(pairConfig)(str)
const createPairElement1 = (pairConfig) => (str) => {
  const arrStr = str.split('')
  const basePair = arrStr.map((item) => {
    return [item, pairConfig[item]]
  })
  return basePair
}

// 5 เขียนแบบ curry ที่รู้ค่า pairConfig ก่อนแล้ว รับแค่ค่า str
// เวลา call function จะเป็น createPairElement2(pairConfig)(str)
function createPairElement2(pairConfig) {
  return function pairElement(str) {
    const arrStr = str.split('')
    const basePair = arrStr.map((item) => {
      return [item, pairConfig[item]]
    })
    return basePair
  }
}
