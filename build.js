
// Node script for reading SVG icons and creating a paths JSON file

const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

const DIR = path.join(__dirname, 'node_modules', 'simple-icons#gh-pages', 'icons')

const files = fs.readdirSync(DIR)
  .filter(f => /\.svg$/.test(f))

const getPath = root => {
  const d = root('path').attr('d')
  return d
}

const getContents = filename => fs.readFileSync(path.join(DIR, filename), 'utf8')

const createPaths = filenames => {
  const paths = filenames.map(f => {
    const svg = getContents(f)
    const root = cheerio.load(svg)
    const value = getPath(root)
    const key = f.replace(/\.svg$/, '')

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

const paths = createPaths(files)
const js = `module.exports = ${JSON.stringify(paths)}`

fs.writeFileSync('simple-icons.js', js)

