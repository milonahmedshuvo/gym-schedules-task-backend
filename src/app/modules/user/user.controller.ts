import { NextFunction, Request, Response } from "express"
import { userServices } from "./user.service"


const createUserAll = async (req: Request, res: Response, next:NextFunction) =>{
    try{
        const userData = req.body
        const result = await userServices.createUserIntoDB(userData)

        res.status(200).json({
            status: true,
            message: 'Registetion successfull!',
            data: result
        })

    }catch(err){
        next(err)
    }
}



const traineeProfile = async (req: Request, res: Response, next:NextFunction) =>{
   
    try{
        const userId = req.user?._id;
        console.log({userId})
    
        const result = await userServices.traineeProfileFromDB(userId)
        

        res.status(200).json({
            status: true,
            message: 'Trainee profile retrive successfull!',
            data: result
        })

    }catch(err){
        next(err)
    }
}



const trainerProfile = async (req: Request, res: Response, next:NextFunction) =>{
   
    try{
        const userId = req.user?._id;
        console.log({userId})
    
        const result = await userServices.trainerProfileFromDB(userId)
        

        res.status(200).json({
            status: true,
            message: 'Trainer profile retrive successfull!',
            data: result
        })

    }catch(err){
        next(err)
    }
}




export const userControllers = {
    createUserAll,
    traineeProfile,
    trainerProfile
}