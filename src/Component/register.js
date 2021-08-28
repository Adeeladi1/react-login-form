import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import { connect } from 'react-redux';
import { RegisterUser } from '../Actions/RegisterAction';
class Register extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            errors:{
                fullName:'',
                email:'',
                password:''
            }
     
        }
    }

    handleChange=(e)=>{
        // let errors=this.state.errors;
        // switch(e.target.name)
        // {
        //     case 'name':
        //         errors.name=e.target.value.length<5 ? 'name should be 5 character long':''
        //         break;
        //         default:
        //             break;
                
        // }
        
    this.setState({[e.target.name]:e.target.value})
    }
   
    handleSubmit=(e)=>{
     e.preventDefault();
      const detail={
          name:this.state.name,
          email:this.state.email,
          password:this.state.password,
          errors:this.state.errors.fullName
      }
          localStorage.setItem('detail', JSON.stringify(detail));
          this.props.RegisterUser(detail);
     if(detail){

        this.props.history.push("/");

     }
     
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
                               <input type="text" name="name"  required onChange={this.handleChange}></input>
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
                            <button onClick={()=> this.setState({check:true}) } className="log-btn" type="submit">register</button>
                          </li>
                          
                      </ul>
                         
                 </form>
                 </Fade>
                 </div>    
                 
                 
              </>   
            
        )
    }
}


export default connect(null, {RegisterUser})(Register);