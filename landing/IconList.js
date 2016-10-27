
const { createElement: h } = require('react')

const relineKeys = require('../reline-keys')
const geomiconsKeys = require('../geomicons-keys')
const simpleKeys = Object.keys(require('../simple-icons'))
const mdKeys = Object.keys(require('../material-design-icons'))
const List = require('./List')

const total = relineKeys.length
  + geomiconsKeys.length
  + simpleKeys.length
  + mdKeys.length

module.exports = () => (
  h('section', {},
    h('h2', {}, `${total} Icons`),
    h('h3', {}, `Reline`),
    h(List, {},
      relineKeys.map((k, i) => (
        h('li', { key: i },
          h('a', { href: `/${k}` }, k)
        )
      ))
    ),
    h('h3', {}, `Geomicons`),
    h(List, {},
      geomiconsKeys.map((k, i) => (
        h('li', { key: i },
          h('a', { href: `/${k}` }, k)
        )
      ))
    ),
    h('h3', {}, `Material Design`),
    h(List, {},
      mdKeys.map((k, i) => (
        h('li', { key: i },
          h('a', { href: `/${k}` }, k)
        )
      ))
    ),
    h('h3', {}, `Simple Icons`),
    h(List, {},
      simpleKeys.map((k, i) => (
        h('li', { key: i },
          h('a', { href: `/${k}` }, k)
        )
      ))
    )
  )
)

