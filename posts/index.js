const fs = require('fs')
const fm = require('front-matter')

function getReadPromise (fileName) {
  let promise = new Promise((resolve, reject) => {
    fs.readFile('archives/' + fileName, 'utf8', (err, data) => {
      if (err) {
        reject(err)
        throw err;
      }
      resolve(data);
    });
  });
  return promise;
}

fs.readdir('archives', 'utf8', (err, files) => {
  if (err) throw err;

  let promises = files.map(item => getReadPromise(item));
  Promise.all(promises)
    .then(dataList => {
      let attrsFiles = dataList.map(item => fm(item).attributes);
      fs.writeFileSync('digest.json', JSON.stringify(attrsFiles), 'utf8');
    })
    .catch(err => console.log(err));
});
