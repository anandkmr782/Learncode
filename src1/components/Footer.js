import React from "react";
import {Link} from "react-router-dom";
import { Button } from 'reactstrap';
import "./Footer.css";
import ModalExample from "./ModalExample";
function Footer(){
    function change() // no ';' here
{
    var elem = document.getElementById("myButton1");
    if (elem.value=="Close Curtain") elem.value = "Open Curtain";
    else elem.value = "Close Curtain";
}
    return(
        
        <div class="footer">
            <div class="learn">
                <h3>Learn Tutorials</h3>
                <p>Html and Css</p>
                <p>JavaScript</p>
                <p>Java</p>
                <p>Python</p>
                <p>C++</p>
            </div>
            
            <div class="priv">
                <h3>Privacy Policy</h3>
                <p>© Copyright 2021. All Rights Reserved.</p>
            </div>
            <div class="ser">
                <h3>Our Services</h3>
                <p>Website Development</p>
                <p>Android Development</p>
                <p>Website Designing</p>
            </div>
            <div class="about">
                <h3>About</h3>
                <p>Create by Group: 13</p>
                <p>Anand kumar(Front-end and Back-end)</p>
                <p>Harsh Kumar(Front-end)</p>
                <p>Puru(Front-end)</p>
            </div>
            <div class="con">
                <h3>Contact Us</h3>
                <p>Developer Contact:LearnCode<br />
                Panipat Institute of Engineering and<br />
                Technology Samalkha Haryana ,132101<br />
                </p>
                
                <Link to=""><img src="image/facebook.png" alt="image/facebook.png" /></Link>
                <Link to=""><img src="image/insta.png" alt="image/insta.png" /></Link><br></br><br></br>
                <ModalExample />
                
            </div>
           
        </div>
    )
}
export default Footer;