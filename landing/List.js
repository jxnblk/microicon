
const { createElement: h } = require('react')

module.exports = (props) => (
  h('ul', {
    className: 'List',
    style: {
      listStyle: 'none',
      paddingLeft: 0,
      marginBottom: '3rem',
      WebkitColumns: '12em',
      columns: '12em'
    }
  }, props.children)
)

