import mongoose from 'mongoose';

export const connectDB = async () => {
 
    await mongoose.connect("mongodb+srv://harryhung195:geYEsJW9fqOBPiiU@cluster0.crxn34s.mongodb.net/food-del").then(()=>console.log("DB Connected"));
  
   
 
};




