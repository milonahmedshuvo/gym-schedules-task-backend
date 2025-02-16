import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"

const validationRequist = (validationZodSchema:AnyZodObject) => {
   
    return async (req:Request, res:Response, next:NextFunction) =>{
      
           console.log('Data pass in Zod Schema', req.body)
           
        try{

            await validationZodSchema.parseAsync({
                body: req.body,
            }) 

            next()
           
        }catch(err){
            next(err)
        }
    }
 }



 export default validationRequist;