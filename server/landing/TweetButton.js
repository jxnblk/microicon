const { createElement: h } = require('react')

module.exports = ({ text }) => (
  h('div', {
    style: {
      minHeight: 20
    }
  },
    h('a', {
      className: 'twitter-share-button',
      href: `https://twitter.com/intent/tweet?text=${encodeURI(text)}`,
      'data-via': 'jxnblk'
    }, 'Tweet'),
    h('script', {
      id: 'twitter-wjs',
      src: '//platform.twitter.com/widgets.js',
      async: true
    })
  )
)

