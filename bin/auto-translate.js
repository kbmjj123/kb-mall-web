import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const zhCN = require('../locates/xx.json');
const translate = require('google-translate-api');
console.info(zhCN)
function translateObj(obj){
  for(let key in obj){
    if(typeof obj[key] === 'object'){
        translateObj(obj)
    }else{
      console.info('即将开始转换-->' + obj[key])
      translate(obj[key], {
        to: 'en'
      }).then(res => {
        console.info(res)
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
for(let key in zhCN){
  translateObj(zhCN[key])
}