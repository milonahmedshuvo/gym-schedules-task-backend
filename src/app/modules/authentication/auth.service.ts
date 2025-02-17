import config from "../../config";
import AppError from "../../error/appError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import jwt from 'jsonwebtoken'


const userLoginFromDB = async (payload:TLoginUser) => {
    

    const user = await User.findOne({email: payload.email})

    if(!user){
        throw new AppError( 404,'user not found!!')
    }
    
    const jwtPayload = {
        _id: user._id,
        email: user.email,
        role: user.role
    }
    const accessToken = jwt.sign(jwtPayload, config.jwt_privateKey as string, {expiresIn: '30d'})




    return {
        accessToken
    }
}




export const authService = {
    userLoginFromDB
}