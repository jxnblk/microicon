
const { createElement: h } = require('react')
const Head = require('./Head')
const Header = require('./Header')
const Demo = require('./Demo')
const Usage = require('./Usage')
const IconList = require('./IconList')

module.exports = ({
}) => (
  h('html', { lang: 'en' },
    h(Head),
    h(Header),
    h(Demo),
    h(Usage),
    h(IconList)
  )
)

