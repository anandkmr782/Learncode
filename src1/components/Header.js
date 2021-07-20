import React,{useState} from "react";
import {Link} from "react-router-dom";
import "./Header.css";
function Header(){
     const [img, setimg] = useState("");
     const inputEvent =(event)=>{
         const data=event.target.value;
         console.log(data);
         setimg(data);
     }
    return(
        <div class="header">
            <div class="leftside">
                <img src="image/logo.png" alt="image/logo.png" />
                <h1>Learncode</h1>
                <input type="text" placeholder="Search..." value={img} onChange={inputEvent} />
                <button class="search">Search</button>
                <ul>
                    <Link to="#"><img src="image/g.png" alt="image/g.pngs" /></Link>
                    <Link to="/login"><li>Signin</li></Link>
                    <Link to="/signup"><li>Signup</li></Link>
                    <Link to="/logout"><li>Signout</li></Link>
                </ul>
                
            </div>
        </div>

    );
}
export default Header;