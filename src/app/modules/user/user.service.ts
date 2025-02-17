import config from "../../config";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import jwt from 'jsonwebtoken'


const createUserIntoDB = async (payload: TUser) => {


    const result = await User.create(payload)
    const jwtPayload = {
        _id: result._id,
        name : payload.name,
        email : payload.email
    }

    const accessToken = jwt.sign(jwtPayload, config.jwt_privateKey as string, {expiresIn: '30d'} )



    return {
        result,
        accessToken
    }
}



const traineeProfileFromDB = async (id:string) => {
    const result = await User.findById(id)
    return result
}

const trainerProfileFromDB = async (id:string) => {
    const result = await User.findById(id)
    return result

}

export const userServices = {
    createUserIntoDB,
    traineeProfileFromDB,
    trainerProfileFromDB
}