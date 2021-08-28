import { REGISTER } from "../types/type";

export const RegisterUser =(data) =>{
    return{
        type:REGISTER,
        payload:data
    }
}