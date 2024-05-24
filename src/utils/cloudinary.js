import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

export const uploadToCloudinary = async(localPath) =>{
    try{
        if(!localPath) return null
        const response = await cloudinary.uploader.upload(localPath, {
            resource_type : "auto" //which type of file is being upload.... auto means that the cloudinary should itself detect the file
        })
        //file uploaded
        console.log("file has been uploaded on cloudinary: "+response.url)
        return response
    }
    catch(error){
        fs.unlinkSync(localPath) //Remove the locally saved file as the upload operation got cancelled
        return null
    }
}

