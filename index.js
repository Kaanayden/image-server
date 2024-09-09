require('dotenv').config()

const express = require('express')
const cors = require('cors')
const storageRouter = require('./routers/storageRouter');

const app = express()
const port = process.env.PORT || 8000


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('This is image server!')
})

app.use('/public', express.static('public'))
app.use('/storage', storageRouter)
  
app.listen(port, () => {
  console.log(`Image server listening on port ${port}`)
})