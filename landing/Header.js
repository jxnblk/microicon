const React = require('react')
const Demo = require('./Demo')
const Tweet = require('./TweetButton')

module.exports = () => (
  React.createElement('header', {
    style: {
      marginBottom: '3rem'
    }
  },
    React.createElement('div', {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    },
      React.createElement(Demo),
      React.createElement('div', {
        style: {
          marginRight: 32,
          marginTop: 32,
          marginBottom: 32,
        }
      },
        React.createElement('h1', { style: { margin: 0 } }, 'microicon'),
        React.createElement('p', { style: { margin: 0 } }, 'SVG icon placeholder microservice')
      ),
      React.createElement(Tweet, { text: 'Microicon: SVG icon placeholder microservice' }),
      React.createElement('div', {
        style: {
          flex: '1 1 auto'
        }
      })
    )
  )
)

