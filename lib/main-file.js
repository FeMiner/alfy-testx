'use strict'
module.exports = (info, keyword) => {
  let script
  for (const object of info.objects) {
    if (object.config && object.config.script) {
      if (keyword) {
        if (object.config.keyword === keyword) {
          script = object.config.script
          break
        }
      } else {
        script = object.config.script
        break
      }
    }
  }
  const match = /run-node (.*?).js/.exec(script)
  return match ? `${match[1]}.js` : 'index.js'
}
