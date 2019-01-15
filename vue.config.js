const path = require('path')
const fs = require('fs')
const glob = require("glob")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const argv = require('minimist')(process.argv.slice(3))
const resolve = dir => path.join(__dirname, dir)
const pages = getSourceList()
module.exports = {
  // 入口文件
  pages,
  // 打包目录
  outputDir: `dist`,
  // 打包时不生成.map文件
  productionSourceMap: false,
}
function getSourceList() {
  let pages = {}
  let fileList = glob.sync("src/view/**/**/*.js")
  for (let file of fileList) {
      let name = path.basename(file, '.js')
      pages[name] = {
          entry: file,
          filename: `${name}.html`,
      }
      //如存在模板时使用当前，不存在时用public/index.html
      let template = path.join(path.dirname(file), `${name}.html`)

      if (fs.existsSync(template)) {
          pages[name].template = template
      }
  }
  return pages
}