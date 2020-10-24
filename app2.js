const express = require('express')
const app = express()
const port = 3000

var connection;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

var router = require('./router/main')(app, connection);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})