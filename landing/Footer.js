
const { createElement: h } = require('react')

module.exports = () => (
  h('footer', {
    style: {
      paddingTop: '3rem',
      paddingBottom: '3rem',
    }
  },
    h('p', {},
      h('a', {
        href: 'http://jxnblk.com'
      }, 'Made by Jxnblk'),
      h('span', {}, ' '),
      h('a', {
        href: 'https://zeit.co/now'
      }, 'Hosted on Now')
    )
  )
)

