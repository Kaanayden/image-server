require('dotenv').config()

const express = require('express')
const cors = require('cors')
const storageRouter = require('./routers/storageRouter');

const app = express()
const port = process.env.PORT || 8000


app.use(cors());
app.use(express.json());


const defaultRouter = express.Router();

defaultRouter.get('/', (req, res) => {
  res.send('This is image server!')
})

defaultRouter.use('/public', express.static('public'))
defaultRouter.use('/storage', storageRouter)

app.use('/image-server', defaultRouter);
  
app.listen(port, () => {
  console.log(`Image server listening on port ${port}`)
})