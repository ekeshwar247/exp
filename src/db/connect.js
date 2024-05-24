import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

// import dotenv from 'dotenv'
// dotenv.config()



// export const connection = async() => {
//     await mongoose.connect(process.env.MONGODB_URL+'/'+DB_NAME)
// .then(()=>{
//     console.log('Database Connected Successfully')
// })
// .catch((err)=>{
//     console.log(err)
// })
// }

export const connection = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL+'/'+DB_NAME)
        console.log('Database Connected Successfully')
    }
    catch(error) {
        console.log(error)
    }
}