const React = require('react')

module.exports = (props) => (
  React.createElement('pre', {
    style: {
      fontFamily: 'Menlo, monospace',
      fontSize: 14,
      maxWidth: '100%',
      overflow: 'auto'
    }
  }, props.children)
)

