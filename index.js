
const url = require('url')
const { createElement } = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const { Icon } = require('reline')

const doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'

const parseNumbers = obj => Object.keys(obj).reduce((a, key) => {
  const val = obj[key]
  const num = parseFloat(val)
  if (!isNaN(num)) {
    a[key] = num
  }
  return a
}, obj)

module.exports = (req, res) => {
  const { pathname, query } = url.parse(req.url, true)
  const [ slash, name, hex ] = pathname.split('/')

  if (!name) {
    return 'microicon'
  }

  const props = parseNumbers(query)

  const svg = doctype + renderToStaticMarkup(
    createElement(Icon, Object.assign({
      name,
    }, props))
  )

  res.setHeader('Content-Type', 'image/svg+xml')
  res.end(svg)
}

