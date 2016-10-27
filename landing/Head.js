
const { createElement: h } = require('react')

const css = `
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.5;
  margin: 0;
  padding: 2rem;
}
a { color: #07c }
`

module.exports = () => (
  h('head', {},
    h('meta', { charSet: 'utf-8' }),
    h('title', {}, 'microicon'),
    h('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }),
    h('meta', { name: 'description', content: 'Icon placeholder microservice' }),
    h('meta', { name: 'twitter:card', content: 'summary_large_image' }),
    h('meta', { name: 'twitter:site', content: '@jxnblk' }),
    h('meta', { name: 'twitter:title', content: 'microicon' }),
    h('meta', { name: 'twitter:description', content: 'Icon placeholder microservice' }),
    h('meta', { name: 'twitter:image', content: '/card.png' }),
    h('style', {
      dangerouslySetInnerHTML: {
        __html: css
      }
    })
  )
)

