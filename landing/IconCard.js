
const { createElement: h } = require('react')
const Icon = require('../Icon')

module.exports = ({ name }) => (
  h('div', {
    style: {
      marginTop: 16,
      marginBottom: 16,
      marginRight: 16,
      breakInside: 'avoid'
    }
  },
    h('a', {
      href: `/${name}`,
      style: {
        color: 'inherit'
      }
    },
      h(Icon, { name, size: 32 }),
      h('div', {
        style: {
          fontSize: 12,
          marginTop: 8
        }
      }, name)
    )
  )
)

