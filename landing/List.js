const React = require('react')

const mapChildren = children => (
  React.Children.map(children, (child) => (
    React.createElement('li', {
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
  React.createElement('ul', {
    className: 'List',
    style: {
      listStyle: 'none',
      paddingLeft: 0,
      marginBottom: '3rem'
    }
  }, mapChildren(props.children))
)
