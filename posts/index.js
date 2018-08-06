const fs = require('fs')
const fm = require('front-matter')
const _ = require('lodash')

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
      let tagMap = {};
      let categorieMap = {};

      attrsFiles.forEach(item => {
        item.categories.forEach(categorie => {
          if (!categorieMap[categorie]) {
            categorieMap[categorie] = [];
          }
          categorieMap[categorie].push(item.title);
        });

        item.tags.forEach(tag => {
          if (!tagMap[tag]) {
            tagMap[tag] = [];
          }
          tagMap[tag].push(item.title);
        });
      });

      let content = {
        tagMap,
        categorieMap
      };
      fs.writeFileSync('attr.json', JSON.stringify(content), 'utf8');
    })
    .catch(err => console.log(err));
});
