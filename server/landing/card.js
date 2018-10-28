const fs = require('fs')
const path = require('path')

module.exports = (req, res) => {
  const png = fs.readFileSync(path.join(__dirname, 'card.png'))
  res.writeHead(200, { 'Content-Type': 'image/png' })
  res.end(png, 'binary')
}

