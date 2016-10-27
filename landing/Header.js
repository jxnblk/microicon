
const { createElement: h } = require('react')
const Tweet = require('./TweetButton')

module.exports = () => (
  h('header', {
    style: {
      marginBottom: '3rem'
    }
  },
    h('h1', {}, 'microicon'),
    h('p', {}, 'SVG icon placeholder microservice'),
    h(Tweet, { text: 'Microicon: SVG icon placeholder microservice' })
  )
)

