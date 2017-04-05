
// todo
// const { paths: reline } = require('reline')
const Icon = require('./Icon')
const geomicons = require('geomicons-open')
const material = require('./material-design-icons')
const simple = require('./simple-icons')

module.exports = Object.assign({},
  Icon,
  geomicons,
  material,
  simple
)

