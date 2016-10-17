
const { createElement: h } = require('react')
const { Icon: Reline } = require('reline')
const Geomicon = require('react-geomicons').default
const geomiconsKeys = require('./geomicons-keys')
const relineKeys = require('./reline-keys')

const Icon = (props) => {
  const {
    name,
    color,
    size = 16
  } = props

  if (relineKeys.includes(name)) {
    return h(Reline, Object.assign({}, props, {
      name,
      size,
      color
    }))
  }

  if (geomiconsKeys.includes(name)) {
    return h(Geomicon, Object.assign({}, props, {
      xmlns: 'http://www.w3.org/2000/svg',
      name,
      size,
      fill: color
    }))
  }

  return h('span', {}, 'No icon found')
}

module.exports = Icon

