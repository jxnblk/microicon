const React = require('react')

module.exports = ({ text }) => (
  React.createElement('div', {
    style: {
      minHeight: 20
    }
  },
    React.createElement('a', {
      className: 'twitter-share-button',
      href: `https://twitter.com/intent/tweet?text=${encodeURI(text)}`,
      'data-via': 'jxnblk'
    }, 'Tweet'),
    React.createElement('script', {
      id: 'twitter-wjs',
      src: '//platform.twitter.com/widgets.js',
      async: true
    })
  )
)

