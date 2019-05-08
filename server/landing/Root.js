const React = require('react')
const Head = require('./Head')
const Header = require('./Header')
const Usage = require('./Usage')
const IconList = require('./IconList')
const Footer = require('./Footer')

module.exports = () => (
  React.createElement('html', { lang: 'en' },
    React.createElement(Head),
    React.createElement(Header),
    React.createElement(Usage),
    React.createElement(IconList),
    React.createElement(Footer)
  )
)
