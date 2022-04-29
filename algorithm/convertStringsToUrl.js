// The input is a string with spaces and title-cased words
// The output is a string with the spaces between words replaced by a hyphen (-)
// The output should be all lower-cased letters
// The output should not have any spaces

function urlSlug(title) {
  // .trim() method removes whitespace from both ends of a string and returns a new string
  let lowerCaseTitle = title.trim().toLowerCase()

  // .split() method splits a string into an array of strings
  // .join() method combine an array into a String
  let urlTittle = lowerCaseTitle.split(/\s+/g).join('-')
  return urlTittle
}

urlSlug(' Winter Is  Coming') // return 'winter-is-coming'
urlSlug('Hold The Door') // return 'the string hold-the-door'
