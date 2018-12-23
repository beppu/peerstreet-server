require('dotenv').config()

function reload(module){
  delete require.cache[require.resolve(module)]
  return require(module)
}

global.reload = reload
global.rl     = reload
global.cl     = console.log

global.knexConfig = require('./knexfile')
