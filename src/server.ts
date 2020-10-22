import express from 'express'
//import mongoose from 'mongoose'
import './database/connection'
import routes from './routes'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


//mongoose.connect('mongodb://localhost:27017/huntapi', { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/api',routes)


app.listen(3333)