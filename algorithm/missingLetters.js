// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined


// 1

const idealRange = 'abcdefghijklmnopqrstuvwxyz'.split('')

function fearNotLetter(str) {
  // เอาตัวอักษรแรก, ตัวสุดท้าย ของ str ไปหาใน idealRange ดูว่าอยู่ตำแหน่งที่เท่าไหร่
  const firstLetter = idealRange.findIndex((letter) => letter === str[0])
  const lastLetter = idealRange.findIndex(
    (letter) => letter === str[str.length - 1]
  )

  // return ช่วงตัวอักษรที่ต้องการตั้งแต่ตัวแรกถึงตัวสุดท้าย
  const realRange = idealRange.slice(firstLetter, lastLetter + 1)

  const missingLetter = realRange
    // เอา str ไปเทียบกับ ช่วงตัวอักษรเมื่อกี้ที่ได้
    .filter((letter) => !str.includes(letter))
  // .toString() ไม่ควรใช้ เพราะเราควบคุมไม่ได้ว่าอยากให้ return เป็น string ในรูปแบบไหน
  // และคนอื่นที่มาอ่านสับสน เข้าใจว่า return ออกมาไม่เหมือนกับที่เราต้องการได้

  // ถ้าไม่มีตัวอักษรที่ต้องการ ให้ return undefined
  // ถ้ามีให้แปลงเป็น string รูปแบบนี้ 'a,b,c'
  return missingLetter.length > 0 ? missingLetter.join(',') : undefined
}