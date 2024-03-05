import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
  {
    content:{    //for your SubTodo names like Gym,Youtube etc.
      type:String,
      required:true,
    },
    complete:{
      type:Boolean,
      default:false
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    subTodos:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubTodo"
      }
    ] // Array of SubTodos
  },
  {
  timestamps:true
  }
)

export const Todo = mongoose.Model("Todo",todoSchema) 