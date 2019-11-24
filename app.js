const express = require('express')
const app = express()
const sls = require('serverless-http')

// handgle GET endpoint in root route /
app.get('/', async (req, res, next) => {
    res.status(200).send('Hello serverless')
})

module.exports.server = sls(app)