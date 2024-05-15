import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

// import dotenv from 'dotenv'
// dotenv.config()



export const connection = () => {
    mongoose.connect(process.env.MONGODB_URL+'/'+DB_NAME)
.then(()=>{
    console.log('Database Connected Successfully')
})
.catch((err)=>{
    console.log(err)
})
}