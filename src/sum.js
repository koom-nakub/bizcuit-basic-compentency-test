const sum = (a = '0', b = '0') => {
  let response = 'Error your arguments is a wrong type'

  if (typeof a === 'string' && typeof b === 'string' && checkNumber(a) && checkNumber(b)) {
    response = +a + +b
  }

  return response.toString()
}

const checkNumber = arg => /^[-+]?\d*$/g.test(arg)

module.exports = sum
