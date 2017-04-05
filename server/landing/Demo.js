
const { createElement: h } = require('react')
const relineKeys = require('../reline-keys')
const geomiconsKeys = require('../geomicons-keys')
const icons = require('../..')
const simpleKeys = Object.keys(icons.simple)
const mdKeys = Object.keys(icons.material)
const Pre = require('./Pre')

const keys = [
  ...relineKeys,
  ...geomiconsKeys,
  ...simpleKeys,
  ...mdKeys
]

const len = keys.length

module.exports = () => {
  const i = Math.floor((Math.random() * (len + 1)))
  const icon = keys[i] || 'x'

  return (
    h('img', {
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

