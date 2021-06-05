var sumFunction = require('../src/sum')

describe('test sum function', () => {
  it('adds "12" + "2" to equal "14"', () => {
    const result = sumFunction('12', '2')
    expect(result).toBe('14')
  })

  it('adds 12 + 2 to throw error message', () => {
    const result = sumFunction(12, 2)
    expect(result).toBe('Error your arguments is a wrong type')
  })

  it('not adds value to be return "0"', () => {
    const result = sumFunction(0)
    expect(result).toBe('0')
  })
})
