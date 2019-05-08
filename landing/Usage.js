const React = require('react')
const Pre = require('./Pre')

module.exports = () => (
  React.createElement('section', { id: 'usage' },
    React.createElement('h2', {}, 'Usage'),
    React.createElement('img', {
      src: '/chevron',
      alt: 'chevron icon'
    }),
    React.createElement(Pre, {}, `<img src='https:icon.now.sh/chevron' alt='chevron icon' />`),
    React.createElement('h3', {}, 'Size'),
    React.createElement('img', {
      src: '/chevron/32',
      alt: 'chevron icon'
    }),
    React.createElement(Pre, {}, `<img src='https:icon.now.sh/chevron/32' alt='chevron icon' />`),
    React.createElement('h3', {}, 'Color'),
    React.createElement('img', {
      src: '/chevron/ff0000',
      alt: 'chevron icon'
    }),
    React.createElement(Pre, {}, `<img src='https:icon.now.sh/chevron/ff0000' alt='chevron icon' />`),
    React.createElement('h3', {}, 'Direction'),
    React.createElement('img', {
      src: '/chevron/down',
      alt: 'chevron icon'
    }),
    React.createElement(Pre, {}, `<img src='https:icon.now.sh/chevron/down' alt='chevron icon' />`)
  )
)

