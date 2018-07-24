const fs = require('fs')
const fm = require('front-matter')
const _ = require('lodash')

let attrStr = fs.readFileSync('attr.json', 'utf8')
let attrObj = JSON.parse(attrStr)

fs.readFile('archives/Array的forEach与splice.md', 'utf8', (err, logData) => {
  if (err) throw err;
  let text = fm(logData);
  console.log(text.attributes)

  let attr = text.attributes
  
  attrObj.posts = [attr]
  fs.writeFileSync('attr.json', JSON.stringify(attrObj), 'utf8')
});