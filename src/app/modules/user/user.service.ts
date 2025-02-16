import config from "../../config";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import jwt from 'jsonwebtoken'


const createUserIntoDB = async (payload: TUser) => {


    const result = await User.create(payload)
    const jwtPayload = {
        name : payload.name,
        email : payload.email
    }

    const accessToken = jwt.sign(jwtPayload, config.jwt_privateKey as string, {expiresIn: '30d'} )



    return {
        result,
        accessToken
    }
}




export const userServices = {
    createUserIntoDB
}