const { createElement: h } = require('react')
const Demo = require('./Demo')
const Tweet = require('./TweetButton')
const CarbonAd = require('./CarbonAd')

module.exports = () => (
  h('header', {
    style: {
      marginBottom: '3rem'
    }
  },
    h('div', {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    },
      h(Demo),
      h('div', {
        style: {
          marginRight: 32,
          marginTop: 32,
          marginBottom: 32,
        }
      },
        h('h1', { style: { margin: 0 } }, 'microicon'),
        h('p', { style: { margin: 0 } }, 'SVG icon placeholder microservice')
      ),
      h(Tweet, { text: 'Microicon: SVG icon placeholder microservice' }),
      h('div', {
        style: {
          flex: '1 1 auto'
        }
      }),
      h(CarbonAd)
    )
  )
)

