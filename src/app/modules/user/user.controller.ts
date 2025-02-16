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


export const userControllers = {
    createUserAll
}