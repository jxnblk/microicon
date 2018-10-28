const { createElement: h } = require('react')

module.exports = (props) => (
  h('pre', {
    style: {
      fontFamily: 'Menlo, monospace',
      fontSize: 14,
      maxWidth: '100%',
      overflow: 'auto'
    }
  }, props.children)
)

