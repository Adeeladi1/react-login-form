import { LOG_IN } from "../types/type";
export const userLogin =(data)=>{
    
   
      return{
          type:LOG_IN,
          payload:data
          
      }
}