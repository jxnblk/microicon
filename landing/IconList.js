const React = require('react')
const keys = require('../lib/keys')
const List = require('./List')
const Panel = require('./Panel')
const IconCard = require('./IconCard')

const total = keys.reline.length + keys.material.length + keys.simple.length

module.exports = () => (
  React.createElement('section', {},
    React.createElement('h2', {}, `${total} Icons`),
    React.createElement('p', {},
      React.createElement('span', {}, 'Includes icons from '),
      React.createElement('a', { href: 'https://github.com/google/material-design-icons' }, 'Material Design'),
      React.createElement('span', {}, ', '),
      React.createElement('a', { href: 'https://github.com/danleech/simple-icons' }, 'Simple Icons'),
      React.createElement('span', {}, ', and '),
      React.createElement('a', { href: 'https://github.com/jxnblk/reline' }, 'Reline'),
      React.createElement('span', {}, '. ')
    ),
    React.createElement(Panel, {
      title: 'Material Design',
      open: true,
    },
      React.createElement(List, {},
        keys.material.map((name, i) => (
          React.createElement(IconCard, { key: i, name })
        ))
      )
    ),
    React.createElement(Panel, {
      title: 'Simple Icons'
    },
      React.createElement(List, {},
        keys.simple.map((name, i) => (
          React.createElement(IconCard, { key: i, name })
        ))
      )
    ),
    React.createElement(Panel, {
      title: 'Reline',
    },
      React.createElement(List, {},
        keys.reline.map((name, i) => (
          React.createElement(IconCard, { key: i, name })
        ))
      )
    )
  )
)

