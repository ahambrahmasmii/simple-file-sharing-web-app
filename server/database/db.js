import { mongoose } from "mongoose";

const DBConnection=async()=>{

    const MONGODB_URI=`mongodb+srv://aniruddh:vasuki@file-sharing.ou8hixm.mongodb.net/?retryWrites=true&w=majority`;
    try{
      await mongoose.connect(MONGODB_URI,{useNewUrlparser:true});
      console.log('Database connected')
    }catch(error){
        console.error('Error while connecting with the database',error.message);
    }


}

export default DBConnection