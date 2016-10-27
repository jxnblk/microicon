
const React = require('react')
const { createElement: h } = React

const mapChildren = children => (
  React.Children.map(children, (child) => (
    h('li', {
      style: {
        display: 'inline-block',
        verticalAlign: 'top',
        minWidth: '12em',
        marginRight: '2em'
      }
    },
      React.cloneElement(child)
    )
  ))
)

module.exports = (props) => (
  h('ul', {
    className: 'List',
    style: {
      listStyle: 'none',
      paddingLeft: 0,
      marginBottom: '3rem'
    }
  }, mapChildren(props.children))
)

