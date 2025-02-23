import { NextFunction, Request, Response } from "express";
import { authService } from "./auth.service";


const userLogin = async (req:Request, res:Response, next:NextFunction) => {

    try{
        const result = await authService.userLoginFromDB(req.body)


    res.status(200).json({
        success: true,
        message: "Login successfully",
        data: result
    })
    
    }catch(err){
        next(err)
    }
}



export const authController = {
    userLogin
}