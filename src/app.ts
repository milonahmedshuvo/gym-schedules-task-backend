import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { userRoutes } from './app/modules/user/user.routes'
import config from './app/config'
import { TErrorSoursePattern } from './app/error/errortype'
import handleMongooseError from './app/error/handleMongooseError'
import handleZodError from './app/error/handleZodError'
import { ZodError } from 'zod'
const app = express()


// middleware 
app.use(express.json())
app.use(cors())


// application routes 
app.use('/api/v1/user', userRoutes)


// global error handler 
app.use((err: any, req: Request, res:Response, next:NextFunction) => {
    
    let statusCode = err.statusCode || 500
    let message = err.message || 'something wrong'
    let error: TErrorSoursePattern = [
        {
          path: '',
          message: 'Something wrong'
        }
      ] 

    
      if(err.name === 'ValidationError'){
        const mongooseError = handleMongooseError(err)
        statusCode = mongooseError.statusCode
        message = mongooseError.message
        error = mongooseError.errorSource
      }else if(err instanceof ZodError){
        const ZodError = handleZodError(err)
        statusCode = ZodError.statusCode
        message = ZodError.message
        error = ZodError.errorSourse
      }



    res.status(statusCode).json({
        status: 'false global error it',
        message : message,
        error : error,
        stack: config.node_env === 'development' ? err.stack : null
    })
})





app.get('/', (req, res) => {
  res.send('Gym schedule!')
})



export default app