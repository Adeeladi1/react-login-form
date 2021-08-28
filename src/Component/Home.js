import { Link } from "react-router-dom";
import "./Home.css";
export const home=(props)=>{
    return(
        <nav>
            <div className="left">
                <h1>Home Flex </h1>
            </div>
            <div className="mid">
                <input style={{width:"20rem"}}></input>
                <Link style={{textDecoration:"none", color:"white" }}>Details</Link>
                <Link style={{textDecoration:"none", color:"white"}}>About</Link>
                <Link style={{textDecoration:"none", color:"white"}}>Products</Link>
                
          </div>
            <div className="right">
            <Link onClick={()=>{}} style={{textDecoration:"none", color:"white"}}>Logout</Link>
            </div>
            
        </nav>
    )
}