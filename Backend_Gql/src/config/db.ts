import mongoose from 'mongoose';



export const connectDB = async () => {

  try{
  await mongoose.connect(process.env.mango_db_url! || '3000');
    console.log('DB connected');
}
  catch(err){
    console.log("DB not connected");
  }
};