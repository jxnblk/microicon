
const { createElement: h } = require('react')

module.exports = () => (
  h('header', {},
    h('h1', {}, 'microicon'),
    h('p', {}, 'Icon placeholder microservice')
  )
)

