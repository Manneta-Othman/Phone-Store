import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRouter from './routes/user.router.js'
import authRouter from './routes/auth.router.js'


dotenv.config()


mongoose.connect(process.env.DATABASE)
.then((result) => {
  console.log('connected')
}).catch((err) => {
  console.log(err)
})

const app = express()

app.use(express.json())

app.listen(3001, () => {
  console.log('server is running inshallah')
})

app.use('/user' , userRouter)
app.use('/auth' , authRouter)