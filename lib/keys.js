const geomiconsPaths = require('geomicons-open')
const simplePaths = require('./simple-icons')
const materialPaths = require('./material-design-icons')

const material = Object.keys(materialPaths)
const simple = Object.keys(simplePaths)

const geomiconsBlacklist = [
  'twitter',
  'facebook',
  'github',
  'dribbble'
]

const geomicons = Object.keys(geomiconsPaths)
  .filter(k => geomiconsBlacklist.indexOf(k) < 0)

const reline = [
  'x',
  'plus',
  'minus',
  'chevron',
  'arrow',
  'triangle',
  'square',
  'diamond',
  'burger'
]

module.exports = {
  material,
  simple,
  geomicons,
  reline
}
