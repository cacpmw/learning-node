import mongoose from 'mongoose'

const connection = mongoose.connect('mongodb://localhost:27017/huntapi', { useNewUrlParser: true, useUnifiedTopology: true })
export default connection