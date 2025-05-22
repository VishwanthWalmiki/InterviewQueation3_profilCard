import mongoose,{Schema,Document} from "mongoose";


export interface IBook extends Document{
  name:String,
  author:String,
  price:Number,
  description:String
}


const userSchema = new Schema<IBook>({
  name:{type:String,required:true},
  author:{type:String,required:true},
  price:{type:Number,required:true},
  description:{type:String,required:true}
})

export default mongoose.model<IBook>('User',userSchema);
