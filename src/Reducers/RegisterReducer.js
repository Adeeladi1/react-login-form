import { REGISTER } from "../types/type";

const initialState={
    list:[]
    
}
export const RegisterUser =(state=initialState, action)=>{
    switch(action.type)
    {
        case REGISTER:
            
         const {name,email,password,errors}=action.payload
        return{
            ...state,
             list:[...state.list,{name,email,password,errors}]
        }
        default:
            return state;
    }
}