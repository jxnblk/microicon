const React = require('react')
const _keys = require('../lib/keys')
const Pre = require('./Pre')

const keys = [
  ..._keys.reline,
  ..._keys.geomicons,
  ..._keys.simple,
  ..._keys.material
]

const len = keys.length

module.exports = () => {
  const i = Math.floor((Math.random() * (len + 1)))
  const icon = keys[i] || 'x'

  return (
    React.createElement('img', {
      width: 64,
      height: 64,
      style: {
        display: 'block',
        marginRight: 32
      },
      src: `/${icon}/64`
    })
  )
}

