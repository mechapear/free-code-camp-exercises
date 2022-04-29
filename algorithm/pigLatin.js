// If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
  // Check if first character of "str" is a consonant or vowel
  const isVowels = /^[aeiou]/g.test(str)
  if (isVowels) return str + 'way'

  const consonant = str.match(/^[^aeiou]+/g)
  return str.substring(consonant[0].length) + consonant.join('') + 'ay'
}

translatePigLatin("california") // return 'aliforniacay'
translatePigLatin("algorithm") // return 'algorithmway'
translatePigLatin("rhythm") // return 'rhythmay'

