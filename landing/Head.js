const React = require('react')

const css = `
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.5;
  margin: 0;
  padding: 2rem;
}
a { color: #07c }
summary:focus {
  background-color: #f6f6f6;
  outline: none;
}
`

module.exports = () => (
  React.createElement('head', null,
    React.createElement('meta', { charSet: 'utf-8' }),
    React.createElement('title', {}, 'microicon'),
    React.createElement('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }),
    React.createElement('meta', { name: 'description', content: 'Icon placeholder microservice' }),
    React.createElement('meta', { name: 'twitter:card', content: 'summary_large_image' }),
    React.createElement('meta', { name: 'twitter:site', content: '@jxnblk' }),
    React.createElement('meta', { name: 'twitter:title', content: 'microicon' }),
    React.createElement('meta', { name: 'twitter:description', content: 'Icon placeholder microservice' }),
    React.createElement('meta', { name: 'twitter:image', content: 'https://icon.now.sh/card.png' }),
    React.createElement('style', {
      dangerouslySetInnerHTML: {
        __html: css
      }
    })
  )
)

