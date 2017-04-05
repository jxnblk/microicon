
const { createElement: h } = require('react')

const microicon = require('../..')
const List = require('./List')
const Panel = require('./Panel')
const IconCard = require('./IconCard')

const { keys } = microicon

const total = keys.geomicons.length
  + keys.reline.length
  + keys.material.length
  + keys.simple.length

module.exports = () => (
  h('section', {},
    h('h2', {}, `${total} Icons`),
    h('p', {},
      h('span', {}, 'Includes icons from '),
      h('a', { href: 'https://github.com/google/material-design-icons' }, 'Material Design'),
      h('span', {}, ', '),
      h('a', { href: 'https://github.com/danleech/simple-icons' }, 'Simple Icons'),
      h('span', {}, ', '),
      h('a', { href: 'https://github.com/jxnblk/geomicons-open' }, 'Geomicons'),
      h('span', {}, ', and '),
      h('a', { href: 'https://github.com/jxnblk/reline' }, 'Reline'),
      h('span', {}, '. ')
    ),
    h(Panel, {
      title: 'Reline',
      open: true
    },
      h(List, {},
        keys.reline.map((name, i) => (
          h(IconCard, { key: i, name })
        ))
      )
    ),
    h(Panel, {
      title: 'Geomicons'
    },
      h(List, {},
        keys.geomicons.map((name, i) => (
          h(IconCard, { key: i, name })
        ))
      )
    ),
    h(Panel, {
      title: 'Material Design'
    },
      h(List, {},
        keys.material.map((name, i) => (
          h(IconCard, { key: i, name })
        ))
      )
    ),
    h(Panel, {
      title: 'Simple Icons'
    },
      h(List, {},
        keys.simple.map((name, i) => (
          h(IconCard, { key: i, name })
        ))
      )
    )
  )
)

