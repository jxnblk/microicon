
const { createElement: h } = require('react')
const { Icon: Reline } = require('reline')
const Geomicon = require('react-geomicons').default
const geomiconsKeys = require('./geomicons-keys')
const relineKeys = require('./reline-keys')
const simplePaths = require('../dist/simple-icons')
const mdPaths = require('../dist/material-design-icons')

const simpleKeys = Object.keys(simplePaths)
const mdKeys = Object.keys(mdPaths)

const Simple = ({
  name,
  size,
  color
}) => {
  const d = simplePaths[name]
  if (!d) return null

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

const MD = ({
  name,
  size,
  color
}) => {
  const d = mdPaths[name]
  if (!d) return null

  return (
    h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: color
    },
      h('path', { d })
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

  if (mdKeys.includes(name)) {
    return h(MD, Object.assign({}, props, {
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

  return null
}

module.exports = Icon

