import React from 'react'
import  './main.css'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Particles from 'react-particles-js';

const Main = () => {
    return(
        
     <div>
        
        <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 60
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} /> 
             
  <h1 class="neon">Happy Birthday<br />Neo</h1>
         <table class = "table">
           
    <tr>
    
    <th>
        <div class="container">
        <div class="red flame"></div>
        <div class="orange flame"></div>
        <div class="yellow flame"></div>
        <div class="white flame"></div>
        <div class="blue circle"></div>
        <div class="black circle"></div>
        </div>
     </th>
     <th>
     </th><th>
     </th><th>
     </th><th>
     </th><th>
     </th>
    <th>
        <div class="container">
        <div class="red flame"></div>
        <div class="orange flame"></div>
        <div class="yellow flame"></div>
        <div class="white flame"></div>
        <div class="blue circle"></div>
        <div class="black circle"></div>
        </div>
     </th>
     <th>
     </th>
     <th>
     </th><th>
     </th><th>
     </th><th>
     </th><th>
     </th><th>
     </th>
    <th>
        <div class="container">
        <div class="red flame"></div>
        <div class="orange flame"></div>
        <div class="yellow flame"></div>
        <div class="white flame"></div>
        <div class="blue circle"></div>
        <div class="black circle"></div>
        </div> 
    </th>
  </tr>
  
</table>

        
       
     </div>
)
}

export default Main;