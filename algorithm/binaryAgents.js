// Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
  // แปลงจาก string ของเลขฐาน 2 เป็น array โดยการ split ด้วย space
  const binArr = str.split(' ')

  const charArr = binArr.map((item) => {
    // แปลงเลขฐาน 2 เป็นเลขฐาน 10 ด้วย parseInt(string, radix); converts strings to numbers; radix = เลขฐาน
    // แปลงเลขฐาน 10 เป็นตัวอักษร ด้วย String.fromCharCode(num); eturns a string created from the specified sequence of UTF-16 code units.
    return String.fromCharCode(parseInt(item, 2))
  })
  // join() array เป็น string
  return charArr.join('')
}

binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
)
// return the string Aren't bonfires fun!?

binaryAgent(
  '01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001'
)
// return the string I love FreeCodeCamp!
