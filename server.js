require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const PORT = process.env.PORT

const app = express()

app.use(logger('dev'))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(express.static("public"))

app.use(require('./routes/index.js'))

app.listen(PORT, () => {
    console.log(
`App running on port ${PORT}
http://localhost:${PORT}`
    )
})