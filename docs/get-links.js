
const geomiconsKeys = require('../geomicons-keys')
const relineKeys = require('../reline-keys')

const keys = [
  ...relineKeys,
  ...geomiconsKeys
]

const domain = 'http://localhost:3000'

const links = keys.map(key => {
  const url = `${domain}/${key}`
  return `- [![${key}](${url})](${url})`
})

console.log(links.join('\n'))

