function telephoneCheck(str) {
  // let wrongFormat = /^[^\d(]|[^\d()\s-]/g

  let codeCheck =
    /^1(\s\d{3}-\d{3}-|\s*\(\d{3}\)\s*\d{3}-|\s\d{3}\s\d{3}\s)\d{4}$/g
  // let codeCheck = /^1\s\d{3}-\d{3}-\d{4}$|^1\s*\(\d{3}\)\s*\d{3}-\d{4}$|^1\s\d{3}\s\d{3}\s\d{4}$/g

  let normalCheck = /^(\d{3}[\s-]*|^\(\d{3}\)\s*)\d{3}[\s-]*\d{4}$/g
  // let normalCheck = /^\d{3}[\s-]*\d{3}[\s-]*\d{4}$|^\(\d{3}\)\s*\d{3}[\s-]*\d{4}$/g

  if (codeCheck.test(str)) {
    return true
  } else if (normalCheck.test(str)) {
    return true
  }
  // else if (wrongFormat.test(str)) {
  //   return false
  // }
  return false
}

telephoneCheck("1 555-555-5555") // return true
telephoneCheck("1 (555) 555-5555") // return true
telephoneCheck("5555555555") // return true
telephoneCheck("555-555-5555") // return true
telephoneCheck("(555)555-5555") // return true
telephoneCheck("1(555)555-5555") // return true
telephoneCheck("1 555)555-5555") // return false
telephoneCheck("2(757)622-7382") // return false
telephoneCheck("555)-555-5555") // return false
telephoneCheck("11 555-555-5555") // return false