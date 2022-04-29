const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const output = 'NOPQRSTUVWXYZABCDEFGHIJKLM'

function rot13(str) {
  let arrStr = str.split('')
  let convertStr = arrStr.map((letter) => convertRot13(letter))
  let newStr = convertStr.join('')
  return newStr
}

function convertRot13(letter) {
  // ถ้าไม่เป็น A-Z ก็ส่งตัวเดิมกลับไป ไม่ต้องแก้
  if (letter.match(/[A-Z]/g)) {
    // หาว่าตัวอักษรที่เราจะแก้คือตัวไหนใน input อยู่ index ที่เท่าไหร่ และเปลี่ยนค่าเป็น output ที่ index เดียวกัน 
    let index = input.indexOf(letter)
    letter = output[index]
  }
  return letter
}

rot13('SERR PBQR PNZC') // return 'FREE CODE CAMP'
rot13("SERR CVMMN!") // return 'FREE PIZZA!'
rot13("SERR YBIR?") // return 'FREE LOVE?'
