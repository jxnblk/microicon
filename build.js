
// Node script for reading SVG icons and creating a paths JSON file

const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

// Simple Icons
const simpleDir = path.join(__dirname, 'node_modules', 'simple-icons#gh-pages', 'icons')
const simpleFiles = fs.readdirSync(simpleDir)
  .filter(f => /\.svg$/.test(f))

const mdKeys = [
  'action',
  'alert',
  'av',
  'communication',
  'content',
  'device',
  'editor',
  'file',
  'hardware',
  'image',
  'maps',
  'navigation',
  'notification',
  'places',
  'social',
  'toggle',
]

const mdDir = mdKeys.reduce((a, key) => {
  a[key] = path.join(__dirname, 'node_modules', 'material-design-icons', key, 'svg', 'production')
  return a
}, {})

const mdFilter = f => /24px\.svg$/.test(f)
const mdFiles = mdKeys.reduce((a, key) => {
  a[key] = fs.readdirSync(mdDir[key]).filter(mdFilter)
  return a
}, {})

const getPath = root => {
  const d = root('path').attr('d')
  return d
}

const getContents = dir => filename => fs.readFileSync(path.join(dir, filename), 'utf8')

const createPaths = dir => filenames => {
  const paths = filenames.map(f => {
    const svg = getContents(dir)(f)
    const root = cheerio.load(svg)
    const value = getPath(root)
    const key = f.replace(/\.svg$/, '')
      .replace(/^ic_/, '')
      .replace(/_24px$/, '')

    return {
      key,
      value
    }
  })
  .reduce((a, b) => {
    a[b.key] = b.value
    return a
  }, {})

  return paths
}

const simplePaths = createPaths(simpleDir)(simpleFiles)
const simpleJs = `module.exports = ${JSON.stringify(simplePaths)}`

const mdPaths = mdKeys.reduce((a, key) => {
  const dir = mdDir[key]
  const files = mdFiles[key]
  const paths = createPaths(dir)(files)
  a[key] = paths
  return a
}, {})

const mdFlattened = Object.keys(mdPaths).reduce((a, key, i) => {
  const paths = Object.keys(mdPaths[key]).reduce((arr, k) => {
    arr.push({
      key: k,
      value: mdPaths[key][k]
    })
    return arr
  }, [])
  return a.concat(paths)
}, []).reduce((a, b) => {
  a[b.key] = b.value
  return a
}, {})

const mdJs = `module.exports = ${JSON.stringify(mdFlattened)}`

fs.writeFileSync('simple-icons.js', simpleJs)
fs.writeFileSync('material-design-icons.js', mdJs)

