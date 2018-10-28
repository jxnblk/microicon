const { createElement: h } = require('react')
const Pre = require('./Pre')

module.exports = () => (
  h('section', { id: 'usage' },
    h('h2', {}, 'Usage'),
    h('img', {
      src: '/chevron',
      alt: 'chevron icon'
    }),
    h(Pre, {}, `<img src='https:icon.now.sh/chevron' alt='chevron icon' />`),
    h('h3', {}, 'Size'),
    h('img', {
      src: '/chevron/32',
      alt: 'chevron icon'
    }),
    h(Pre, {}, `<img src='https:icon.now.sh/chevron/32' alt='chevron icon' />`),
    h('h3', {}, 'Color'),
    h('img', {
      src: '/chevron/ff0000',
      alt: 'chevron icon'
    }),
    h(Pre, {}, `<img src='https:icon.now.sh/chevron/ff0000' alt='chevron icon' />`),
    h('h3', {}, 'Direction'),
    h('img', {
      src: '/chevron/down',
      alt: 'chevron icon'
    }),
    h(Pre, {}, `<img src='https:icon.now.sh/chevron/down' alt='chevron icon' />`)
  )
)

