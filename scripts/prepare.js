
const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs');

const ruleFiles = fs.readdirSync('src/assets/i18n/rules').filter(x => path.extname(x) === '.yml');
ruleFiles.forEach(file => {

  const fileL = fs.readFileSync(`src/assets/i18n/rules/${file}`, 'UTF-8');
  const json = yaml.safeLoad(fileL);
  
  fs.writeFileSync(`src/assets/i18n/rules/${file.split('.')[0]}.json`, JSON.stringify(json));

});

