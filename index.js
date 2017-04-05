
// todo
// const { paths: reline } = require('reline')
const geomicons = require('geomicons-open')
const material = require('./server/material-design-icons')
const simple = require('./server/simple-icons')
const Icon = require('./server/Icon')

module.exports = Object.assign({},
  Icon,
  geomicons,
  material,
  simple
)

