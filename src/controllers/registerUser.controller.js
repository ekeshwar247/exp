import {asyncHandler} from '../utils/asyncHandler.js'
import {User} from '../models/user.model.js'
import {uploadToCloudinary} from '../utils/cloudinary.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import {ApiError} from '../utils/ApiError.js'

const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,fullname,password} = req.body
    // console.log(username+" "+email+" "+fullname+" "+password)
    // res.status(200).json({
    //     message : "OK"
    // })

    console.log(process.env.PORT)

    if(
        [fullname,email,username,password].some((field)=>
           field?.trim()==="")
        )
        {
            throw new ApiError(400,"All fields are required")
        }
        const existedUser = await User.findOne({
            $or: [{username},{email}]
        })

        if(existedUser)
        {
            throw new ApiError(409,"Email or username already exists")
        }

        const avatarLocalPath = req.files?.avatar[0]?.path
        const coverImageLocalPath = req.files?.coverImage[0]?.path

        console.log(avatarLocalPath)

        if(!avatarLocalPath)
            {
                throw new ApiError(400,"Avatar is required")
            }
        
        const avatar = await uploadToCloudinary(avatarLocalPath)
        const coverImage = await uploadToCloudinary(coverImageLocalPath)

        if(!avatar)
        {
            console.log("YOYOYOYO")
            throw new ApiError(400,"Avatar isn't uploaded")
        }

        const user = await User.create({
            fullname,
            username:username.toLowerCase(),
            password,
            email,
            avatar:avatar.url,
            coverImage:coverImage?.url || ""
        })

        const createdUser = await User.findById(user._id)

        if(!createdUser)
        {
            throw new ApiError(500,"Something went wrong while creating the user")
        }
        res.status(201).json({
            username : user.username,
            fullname : user.fullname,
            email : user.email
        })
    
})

export {registerUser}