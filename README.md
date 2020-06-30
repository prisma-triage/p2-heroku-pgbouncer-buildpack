# Introduction

Testing use of Prisma and Heroku PgBouncer buildpack.

1. Set the env var `DATABASE_URL` to a publicly accessible Postgres database.

2. Set the env var `DEBUG=*` for better logs from Prisma client

3. Deploy to Heroku using

`heroku create`
`git push heroku master`

4. Open the application URL that you get from the logs

5. See heroku logs with `heroku logs --tail`

6. Note that this works without `pgcouncer=true` in the connection string.

PgBouncer settings: https://github.com/heroku/heroku-buildpack-pgbouncer/blob/master/bin/gen-pgbouncer-conf.sh

PgBouncer buildpack Docs: https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-pgbouncer
