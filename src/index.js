import mongoose from 'mongoose'
import {DB_NAME} from './constants.js'
import dotenv from 'dotenv'
import {connection} from './db/connect.js'
dotenv.config()

connection()


// console.log(process.env.MONGODB_URL)

// mongoose.connect(process.env.MONGODB_URL+'/'+DB_NAME)
// .then(()=>{
//     console.log('Database Connected Successfully')
// })
// .catch((err)=>{
//     console.log(err)
// })