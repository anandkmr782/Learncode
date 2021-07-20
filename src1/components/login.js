import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login(){
    return(
        <div class="main">
            <div class="sub-main">
                <h1>Signin</h1>
                <div class="input">
                    
                <input type="text" placeholder="Type your usename" />
                <input type="password" placeholder="Type your password" />                
                </div> 
                <div class="link">
                    <Link to="forget">Forget Password?</Link>
                </div>               
                <div class="login">
                <button type="button" onclick="alert('Hello world!')">Signin</button>
                    
                </div>

            </div>
            
        </div>        
    );
}
export default Login;