import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRouter from './routes/user.router.js'
import authRouter from './routes/auth.router.js'
import cookieParser from 'cookie-parser'


dotenv.config()


mongoose.connect(process.env.DATABASE)
.then((result) => {
  console.log('connected')
}).catch((err) => {
  console.log(err)
})

const app = express()

app.use(express.json())

app.use(cookieParser())

app.listen(3001, () => {
  console.log('server is running inshallah')
})

app.use('/user' , userRouter)
app.use('/auth' , authRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})