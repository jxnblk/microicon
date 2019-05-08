const { createElement: h } = require('react')
const { Icon: Reline } = require('reline')
// const Geomicon = require('react-geomicons').default
const keys = require('./keys')
const simplePaths = require('./simple-icons')
const materialPaths = require('./material-design-icons')

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
      viewBox: '0 0 24 24',
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
  const d = materialPaths[name]
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

  if (keys.simple.includes(name)) {
    return h(Simple, Object.assign({}, props, {
      name,
      size,
      color
    }))
  }

  if (keys.reline.includes(name)) {
    return h(Reline, Object.assign({}, props, {
      name,
      size,
      color
    }))
  }

  if (keys.material.includes(name)) {
    return h(MD, Object.assign({}, props, {
      name,
      size,
      color
    }))
  }

  if (keys.geomicons.includes(name)) {
    return false
    /*
    return h(Geomicon, Object.assign({}, props, {
      xmlns: 'http://www.w3.org/2000/svg',
      name,
      size,
      fill: color
    }))
    */
  }

  return null
}

module.exports = Icon
