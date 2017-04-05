
const { createElement: h } = require('react')

module.exports = ({ title, children, open }) => (
  h('details', { open },
    h('summary', {
      style: {
        fontSize: 24,
        fontWeight: 'bold',
        cursor: 'pointer'
      }
    }, title),
    h('div', {}, children)
  )
)

