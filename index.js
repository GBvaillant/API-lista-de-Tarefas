const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = 3000
const mongoose = require('mongoose')
const router = require('./src/routers/router')
const PASSWORD = process.env.DB_PASS
const USER = process.env.DB_USER

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log('Server running...')
})

//mongoose connect
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${USER}:${PASSWORD}@ac-xcvsboy-shard-00-00.ftilokk.mongodb.net:27017,ac-xcvsboy-shard-00-01.ftilokk.mongodb.net:27017,ac-xcvsboy-shard-00-02.ftilokk.mongodb.net:27017/?ssl=true&replicaSet=atlas-131akc-shard-0&authSource=admin&retryWrites=true&w=majority`)
    .then(() => {
        console.log('Connect is database is succefull')
    }).catch((err) => {
        console.log('Error: ' + err)
    })