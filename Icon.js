
const { createElement: h } = require('react')
const { Icon: Reline } = require('reline')
const Geomicon = require('react-geomicons').default
const geomiconsKeys = require('./geomicons-keys')
const relineKeys = require('./reline-keys')
const simplePaths = require('./simple-icons')

const simpleKeys = Object.keys(simplePaths)

const Simple = ({
  name,
  size,
  color
}) => {
  const d = simplePaths[name] || ''

  return (
    h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 16 16',
      width: size,
      height: size,
      fill: color,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: '1.414',
    },
      h('path', {
        fillRule: 'nonzero',
        d
      })
    )
  )
}

const Icon = (props) => {
  const {
    name,
    color,
    size = 16
  } = props

  if (simpleKeys.includes(name)) {
    return h(Simple, Object.assign({}, props, {
      name,
      size,
      color
    }))
  }

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

