import { LOG_IN } from "../types/type"
const initialState ={
    name:"",
    email:"",
    password:""

}

export const Login_Reducer =(state=initialState, action)=>{
     switch(action.type){
         case LOG_IN:
             return{

                 user:action.payload,
                 
             }
             default:
                 return state
     }
}