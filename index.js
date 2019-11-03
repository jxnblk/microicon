const geomicons = require('geomicons-open')
const material = require('./lib/material-design-icons')
const simple = require('./lib/simple-icons')
const keys = require('./lib/keys')
const Icon = require('./lib/Icon')

module.exports = Object.assign({
  Icon,
  keys,
  geomicons,
  material,
  simple
},
  geomicons,
  material,
  simple
)

