import mongoose from 'mongoose';

const conn = async()=>{
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log(`Mongodb connected`);
    }catch(err){
        console.log(`error connecting`,err.message);        
    }
}

export default conn;