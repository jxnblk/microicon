
// todo
// const { paths: reline } = require('reline')
const geomicons = require('geomicons-open')
const material = require('./dist/material-design-icons')
const simple = require('./dist/simple-icons')
const Icon = require('./server/Icon')

module.exports = Object.assign({
  geomicons,
  material,
  simple
},
  Icon,
  geomicons,
  material,
  simple
)

