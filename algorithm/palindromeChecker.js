function palindrome(str) {
  let reverseStr = clearSpace(str).split('').reverse().join('')
  let newStr = clearSpace(str).split('').join('')
  return reverseStr == newStr ? true : false
}

function clearSpace(str) {
  return str.toLowerCase().replace(/\s|\W|_/g, '')
}

palindrome("My age is 0, 0 si ega ym.") // return true
palindrome("_eye") // return true
palindrome("0_0 (: /-\ :) 0-0") // return true
palindrome("not a palindrome") // return false
palindrome("almostomla") // return false
