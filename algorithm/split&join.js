// split method splits a string into an array of strings
function splitify(str) {
  return str.split(/\s|\W/g)
}

splitify('Hello World,I-am code') // return ["Hello", "World", "I", "am", "code"]
splitify('Earth-is-our home') // return ["Earth", "is", "our", "home"]
splitify('This.is.a-sentence') // return ["This", "is", "a", "sentence"]


// Combine an Array into a String Using the join Method
function sentensify(str) {
  return str.split(/\s|\W/g).join(' ')
}

sentensify('May-the-force-be-with-you') // return 'May the force be with you'
sentensify("The.force.is.strong.with.this.one") // return 'the string 'The force is strong with this one'
sentensify("There,has,been,an,awakening") // return 'There has been an awakening'

