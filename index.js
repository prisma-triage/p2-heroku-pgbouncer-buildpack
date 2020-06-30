const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
  log: 'info',
  datasources: {
    db: {
      url: process.env.DATABASE_URL_PGBOUNCER,
    },
  },
})

const app = express()
const port = process.env.PORT || 3000

app.get('/', async (req, res) => {
  const data = await prisma.user.findMany({})

  console.log('DATABASE_URL', process.env.DATABASE_URL)
  console.log('DATABASE_URL_PGBOUNCER', process.env.DATABASE_URL_PGBOUNCER)

  return res.send(
    JSON.stringify({
      database_url: process.env.DATABASE_URL,
      database_url_pgbouncer: process.env.DATABASE_URL_PGBOUNCER,
      data,
    }),
  )
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
