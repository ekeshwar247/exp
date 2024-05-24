import {asyncHandler} from '../utils/asyncHandler.js'

const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,fullname,password} = req.body
    console.log(username+" "+email+" "+fullname+" "+password)
    res.status(200).json({
        message : "OK"
    })
})

export {registerUser}