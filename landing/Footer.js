const React = require('react')

module.exports = () => (
  React.createElement('footer', {
    style: {
      paddingTop: '3rem',
      paddingBottom: '3rem',
    }
  },
    React.createElement('p', {},
      React.createElement('a', {
        href: 'https://github.com/jxnblk/microicon'
      }, 'GitHub'),
      React.createElement('span', {}, ' '),
      React.createElement('a', {
        href: 'http://jxnblk.com'
      }, 'Made by Jxnblk'),
      React.createElement('span', {}, ' '),
      React.createElement('a', {
        href: 'https://zeit.co/now'
      }, 'Hosted on Now')
    )
  )
)

