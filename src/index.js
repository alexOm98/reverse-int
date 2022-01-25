module.exports = function reverse (n) {
  const str = n.toString()
  const arr = str.split('').reverse().join('')
  const result = arr.replace(/-/g, '');
  return +result
}
