
const { createElement: h } = require('react')

const icon = 'x'
module.exports = () => (
  h('section', {},
    h('img', {
      src: `/${icon}/96`
    })
  )
)

