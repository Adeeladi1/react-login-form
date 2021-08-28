import LogIn from './Component/user';
import { home } from './Component/Home';
import Register from './Component/register';
import React,{Component} from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import "./App.css";
class App extends Component{
    constructor(){
      super();
      this.state={
        loggedIn:false
      }
    }
     render(){
         return(
              <Provider store={store}>
                <BrowserRouter>
                  <Route exact path="/" component={LogIn}/>
                  
                  <Route exact path="/home" component={home}/>
                  <Route exact path="/register" component={Register}/>
          
                  
                </BrowserRouter>
                </Provider>
            
         )
     }
}

export default App;
