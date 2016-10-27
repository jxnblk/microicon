
const geomiconsPaths = require('geomicons-open')

const blacklist = [
  'twitter',
  'facebook',
  'github',
  'dribbble'
]

module.exports = Object.keys(geomiconsPaths)
  .filter(k => blacklist.indexOf(k) < 0)

