const { convertToRoman } = require('./convertToRoman')

describe('convertToRoman', () => {
  it('should return the string II', () => {
    expect(convertToRoman(2)).toEqual('II')
  })

  it('should return the string III', () => {
    expect(convertToRoman(3)).toEqual('III')
  })

  it('should return the string IV', () => {
    expect(convertToRoman(4)).toEqual('IV')
  })

  it('should return the string V', () => {
    expect(convertToRoman(5)).toEqual('V')
  })

  it('should return the string IX', () => {
    expect(convertToRoman(9)).toEqual('IX')
  })

  it('should return the string XII', () => {
    expect(convertToRoman(12)).toEqual('XII')
  })

  it('should return the string XVI', () => {
    expect(convertToRoman(16)).toEqual('XVI')
  })

  it('should return the string XXIX', () => {
    expect(convertToRoman(29)).toEqual('XXIX')
  })

  it('should return the string XLIV', () => {
    expect(convertToRoman(44)).toEqual('XLIV')
  })

  it('should return the string XLV', () => {
    expect(convertToRoman(45)).toEqual('XLV')
  })

  it('should return the string LXVIII', () => {
    expect(convertToRoman(68)).toEqual('LXVIII')
  })

  it('should return the string LXXXIII', () => {
    expect(convertToRoman(83)).toEqual('LXXXIII')
  })

  it('should return the string XCVII', () => {
    expect(convertToRoman(97)).toEqual('XCVII')
  })

  it('should return the string XCIX', () => {
    expect(convertToRoman(99)).toEqual('XCIX')
  })

  it('should return the string CD', () => {
    expect(convertToRoman(400)).toEqual('CD')
  })

  it('should return the string D', () => {
    expect(convertToRoman(500)).toEqual('D')
  })

  it('should return the string DI', () => {
    expect(convertToRoman(501)).toEqual('DI')
  })

  it('should return the string DCXLIX', () => {
    expect(convertToRoman(649)).toEqual('DCXLIX')
  })

  it('should return the string DCCXCVIII', () => {
    expect(convertToRoman(798)).toEqual('DCCXCVIII')
  })

  it('should return the string DCCCXCI', () => {
    expect(convertToRoman(891)).toEqual('DCCCXCI')
  })

  it('should return the string M', () => {
    expect(convertToRoman(1000)).toEqual('M')
  })

  it('should return the string MIV', () => {
    expect(convertToRoman(1004)).toEqual('MIV')
  })

  it('should return the string MVI', () => {
    expect(convertToRoman(1006)).toEqual('MVI')
  })

  it('should return the string MXXIII', () => {
    expect(convertToRoman(1023)).toEqual('MXXIII')
  })

  it('should return the string MMXIV', () => {
    expect(convertToRoman(2014)).toEqual('MMXIV')
  })

  it('should return the string MMMCMXCIX', () => {
    expect(convertToRoman(3999)).toEqual('MMMCMXCIX')
  })
})
