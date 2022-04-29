// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

const endcode = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
}

function convertHTML(str) {
  // Using regex, replace characters with endcode
  return str.replace(/\&|\<|\>|\"|\'/g, (match) => endcode[match])
}

convertHTML('Dolce & Gabbana')
// return the string Dolce &amp; Gabbana

convertHTML("Schindler's List")
// return the string Schindler&apos;s List

convertHTML('<>')
// return the string &lt;&gt;
