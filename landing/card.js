
const { createElement: h } = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const Pageres = require('pageres')
const Datauri = require('datauri')
const Icon = require('../Icon')

const black = '#000'
const white = '#fff'

const Svg = () => (
  h('svg', {
    viewBox: '0 0 256 192',
    width: 512,
    height: 384,
  },
    h('rect', {
      width: 256,
      height: 192,
      fill: black
    }),
    h('g', { transform: 'translate(16 16)' },
      h('g', { transform: 'translate(0 0)' },
        h(Icon, { name: 'cog', size: 32, color: white })
      ),
      h('g', { transform: 'translate(64 0)' },
        h(Icon, { name: 'cloud', size: 32, color: white })
      ),
      h('g', { transform: 'translate(128 0)' },
        h(Icon, { name: 'skull', size: 32, color: white })
      ),
      h('g', { transform: 'translate(192 0)' },
        h(Icon, { name: 'camera', size: 32, color: white })
      )
    ),
    h('g', { transform: 'translate(16 80)' },
      h('g', { transform: 'translate(0 0)' },
        h(Icon, { name: 'chevron', size: 32, color: white })
      ),
      h('g', { transform: 'translate(64 0)' },
        h(Icon, { name: 'x', size: 32, color: white })
      ),
      h('g', { transform: 'translate(128 0)' },
        h(Icon, { name: 'arrow', size: 32, color: white })
      ),
      h('g', { transform: 'translate(192 0)' },
        h(Icon, { name: 'plus', size: 32, color: white })
      )
    ),
    h('g', { transform: 'translate(16 144)' },
      h('g', { transform: 'translate(0 0)' },
        h(Icon, { name: 'accessibility', size: 32, color: white })
      ),
      h('g', { transform: 'translate(64 0)' },
        h(Icon, { name: 'build', size: 32, color: white })
      ),
      h('g', { transform: 'translate(128 0)' },
        h(Icon, { name: 'sentiment_very_dissatisfied', size: 32, color: white })
      ),
      h('g', { transform: 'translate(192 0)' },
        h(Icon, { name: 'phone_android', size: 32, color: white })
      )
    )
  )
)
const Root = ({ children }) => (
  h('html', {
    style: {
      width: 512,
      height: 384
    }
  },
    h('style', {
      dangerouslySetInnerHTML: {
        __html: 'svg{width:512px;height:384px;}'
      }
    }),
    children
  )
)

module.exports = (req, res) => {
  const svg = renderToStaticMarkup(
    h(Root, {},
      h(Svg)
    )
  )

  /*
  if (!/png/.test(req.url)) {
    return svg
  }
  */
  const datauri = new Datauri()
  const buffer = new Buffer(svg, 'utf8')
  datauri.format('.html', buffer)
  const data = datauri.content
  const pageres = new Pageres({})
    .src(data, ['512x384'])

  pageres.run()
    .then(streams => {
      res.setHeader('Content-Type', 'image/png')
      streams.forEach(s => s.pipe(res))
    })

  pageres.on('warning', () => {
    return 'Error'
  })
}

