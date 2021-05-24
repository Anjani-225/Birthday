import React from 'react'
import  './ball.css'
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';

const Ball = () => {
    return(
        
    <div class= "ball-main">
         
          
          <div class = "bouncingball"> 
           </div>

           <Link to="/dog">
            <button class = "throw-btn">
                <b>THROW!</b>

            </button>
            </Link> 
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

           
            
    </div>
)
}

export default Ball;