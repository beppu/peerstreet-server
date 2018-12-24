const dotenv     = require('dotenv').config()
const Koa        = require('koa')
const bodyParser = require('koa-bodyparser')
const Router     = require('koa-router')
const morgan     = require('koa-morgan')

const db         = require('./lib/db')

const port   = process.env.PORT || 3000
const koa    = new Koa()
const router = new Router()

router.get('/', async ctx => {
  const zip = ctx.request.query.zip
  if (zip) {
    const msa = await db.msaByZip(zip)
    if (msa) {
      ctx.body = {
        zip,
        cbsa:            msa.cbsa,
        name:            msa.name,
        popestimate2014: msa.popestimate2014,
        popestimate2015: msa.popestimate2015
      }
    } else {
      ctx.body = {
        success: false,
        zip,
        message: 'MSA for zip code not found.'
      }
    }
  } else {
    ctx.body = {
      success: false,
      message: 'No zip code provided.'
    }
  }
})

koa
  .use(morgan('short', { stream: process.stdout }))
  .use(bodyParser())
  .use(router.routes())
  .listen(port, () => {
    console.log(`> Ready on https://localhost:${port}`)
  })
