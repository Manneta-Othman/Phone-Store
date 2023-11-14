import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()


mongoose.connect(process.env.DATABASE).then(() => {
  console.log('connected')
}).catch((err) => {
  console.log(err)
})

const app = express()

app.listen(3001, () => {
  console.log('server is running inshallah')
})