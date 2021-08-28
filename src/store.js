import { compose, combineReducers, createStore ,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Login_Reducer } from "./Reducers/reducer";
import { RegisterUser } from "./Reducers/RegisterReducer";
const initialState ={};
const composeEnhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store =createStore(
  combineReducers(
    {
      registerUser:RegisterUser,
     Products:Login_Reducer
    }),
    initialState,
  composeEnhancer(applyMiddleware(thunk))
  
)