// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

function myReplace(str, before, after) {
  // Check if first character of "before" is a capital or lowercase letter
  const startUpper = /^[A-Z]/g.test(before)
  if (startUpper) {
    // If it is, make the first letter of "after" uppercase
    after = after.substring(0, 1).toUpperCase() + after.substring(1)
  } else {
    // If it is not, make the first letter of "after" lowercase
    after = after.substring(0, 1).toLowerCase() + after.substring(1)
  }

  return str.replace(before, after)
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
// return 'He is Sitting on the couch'
myReplace("Let us go to the store", "store", "mall")
// return 'Let us go to the mall'