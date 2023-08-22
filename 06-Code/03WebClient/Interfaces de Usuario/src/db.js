import mongoose  from "mongoose";

export const connectDB = async() =>{
    try{
        await mongoose.connect('mongodb+srv://lmllumiquinga3:4189@cluster0.qlh6eal.mongodb.net/');
        console.log(">>> Conectado a la base de datos");
    }catch(error){
        console.log(error);
    }
} ;
