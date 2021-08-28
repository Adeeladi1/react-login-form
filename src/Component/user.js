import React, {Component} from 'react';
import {connect} from 'react-redux';
import { userLogin } from '../Actions/action';
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom';


class LogIn extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            loggedIn:JSON.parse(localStorage.getItem('detail')).name

    
        }
    }

    handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    }
   
    handleSubmit=(e)=>{
     e.preventDefault();
     const details={
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        
    }
     
    this.props.isRegistered.map(e=> e.name===details.name && 
        (this.props.userLogin(details) 
        ,this.props.history.push("/home")))
     
    }



    render(){
        return(
              <>
                <div className="flex-container">
                <Fade bottom casecade>
                 <form onSubmit={this.handleSubmit}>
                      <ul className="main">
                          <img src="https://image.flaticon.com/icons/png/512/187/187879.png"  alt=""/>
                          <li>
                              <label>User Name</label>
                               <input type="text" name="name" required onChange={this.handleChange}></input>
                          </li>

                          <li>
                              <label>User  email</label>
                              <input type="email" name="email" required onChange={this.handleChange}></input>
                          </li>
                          <li>
                              <label>Password </label>
                              <input type="password" name="password" required onChange={this.handleChange}></input>
                          </li>
                          <li>
                            <button className="log-btn" type="submit">Login</button>
                          </li>
                          <li>
                             <Link to="/register"> <button className="reg-btn"
                              type="submit">Register ?</button></Link>
                              
                          </li>
                          
                      </ul>
                         
                 </form>
                 </Fade>
                 </div>   
              </>   
            
        )
    }
}


export default connect((state)=> ({ isRegistered:state.registerUser.list}), {userLogin})(LogIn);