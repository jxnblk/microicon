const React = require('react')

module.exports = ({ title, children, open }) => (
  React.createElement('details', { open },
    React.createElement('summary', {
      style: {
        fontSize: 24,
        fontWeight: 'bold',
        cursor: 'pointer'
      }
    }, title),
    React.createElement('div', {}, children)
  )
)

