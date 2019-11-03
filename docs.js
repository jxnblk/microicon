const fs = require('fs')
const path = require('path')
const keys = require('./lib/keys')

console.log(keys)

let doc = '# Icons\n'

const createLinks = keys => {
  keys.forEach(key => {
    const url = 'https://icon.now.sh/' + key
    doc += `- [![](${url})](${url}) ${url}\n`
  })
}

Object.keys(keys).forEach(name => {
  doc += `\n## ${name}\n\n`
  createLinks(keys[name])
})

console.log(doc)

const filename = path.join(__dirname, 'icons.md')

fs.writeFileSync(filename, doc)
