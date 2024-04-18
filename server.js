const express = require('express')
const app = express()
const { readdirSync } = require('fs')
const { configDotenv } = require('dotenv').config()
const body = require('body-parser')
const cookieParser = require('cookie-parser')
const port = process.env.SERVER_PORT || 8000


app.use(body.json({ limit: '5mb' }))
app.use(body.urlencoded({ extended: true }))

readdirSync('./app/routes').map((route) =>
    app.use('/api',require('./app/routes/'+route))
)

app.listen(port, () => console.log(`listening to port:${port} `))