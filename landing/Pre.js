
const { createElement: h } = require('react')

module.exports = (props) => (
  h('pre', Object.keys({}, props, {
    style: {
      fontFamily: 'Menlo, monospace',
      fontSize: 14
    }
  }), props.children)
)

