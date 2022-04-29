// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str.split(/\s|\W|\_|(?=[A-Z])/g).join('-').toLowerCase()
  }

spinalCase("This Is Spinal Tap") // return 'this-is-spinal-tap'
spinalCase("The_Andy_Griffith_Show") // return 'the-andy-griffith-show'
spinalCase("AllThe-small Things")  // return 'all-the-small-things'