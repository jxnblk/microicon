
const React = require('react')
const { createElement: h } = React

const mapChildren = children => (
  React.Children.map(children, (child) => (
    h('li', {
      style: {
        boxSizing: 'border-box',
        display: 'inline-block',
        verticalAlign: 'top',
        width: '7em',
        paddingRight: '1em'
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

