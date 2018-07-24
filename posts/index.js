const fs = require('fs')

fs.readFile('archives/Array的forEach与splice.md', (err, logData) => {
  if (err) throw err;
  let text = logData.toString();
  console.log(text)
});