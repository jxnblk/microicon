const React = require('react')
const Icon = require('../lib/Icon')

module.exports = ({ name }) => (
  React.createElement('div', {
    style: {
      marginTop: 16,
      marginBottom: 16,
      marginRight: 16,
      breakInside: 'avoid'
    }
  },
    React.createElement('a', {
      href: `/${name}`,
      style: {
        color: 'inherit'
      }
    },
      React.createElement(Icon, { name, size: 32 }),
      React.createElement('div', {
        style: {
          fontSize: 12,
          paddingTop: 8,
          paddingBottom: 8,
          wordBreak: 'break-word'
        }
      }, name)
    )
  )
)

