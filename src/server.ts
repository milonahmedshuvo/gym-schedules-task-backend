import mongoose from 'mongoose'
import app from "./app";
import config from "./app/config";


async function main() {
 try{
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
        console.log(`Gym schedule app listening on port ${config.port}`)
      })

 }catch(err){
    console.log("server error it", err)
 }
}


main().catch(err => console.log(err));