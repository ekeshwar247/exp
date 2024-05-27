import dotenv from 'dotenv'
import {connection} from './db/connect.js'
import {app} from './app.js'

dotenv.config({
   path: './.env'
})

connection()
.then(()=>{
   app.listen(process.env.PORT,()=>{
      console.log('Server is listening on Port: '+process.env.PORT)
   })
})
.catch((err)=>{
   console.log(err)
})


// app.listen(process.env.PORT,()=>{
//    console.log('Server is listening on Port: '+process.env.PORT)
// })

// console.log(process.env.MONGODB_URL)

// mongoose.connect(process.env.MONGODB_URL+'/'+DB_NAME)
// .then(()=>{
//     console.log('Database Connected Successfully')
// })
// .catch((err)=>{
//     console.log(err)
// })