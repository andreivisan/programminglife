const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {port, mongoURI} = require('./config')


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndexL: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB database is connected'))
.catch((err) => console.log(err))

app.get('/', (request, response) => response.send('hello world!'))

app.listen(port, () => console.log('Express is running at port ' + port))