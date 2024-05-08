import React from 'react';
import { Link } from 'react-router-dom';
import signupLogo from '../../assets/img/signupLogo.svg';


import './Signup.css'

const Signup = () => {
  return (
   
    <section id="search" className="search">
        <div className="container" >
          <div className="row">
            <div className="col-lg-4 tweets ps-lg-10 ">
           
          <h3>Analyze Tweets</h3>
          <p >Discover hate speech with precision.</p>
          <img src={signupLogo} alt=''/>
          <h6 className="mt-4">Analyze tweets with ease.</h6>
      
            </div>
           
            <div className="col-lg-4 ps-lg-5">
              <div className="content-sign">
               
              <form>
          <h3>Get Started Now</h3>
          <p classNameName="subtitlee">Experience accurate hate speech detection.</p>
          <input type="text" placeholder="Enter a sample tweet" className='type' />
          <div classNameName="button-container">
            <Link to="/components/Home/Home" >
              <button className='btn-custom'>Classify</button>
            </Link>
          </div>
        </form>
               
              </div>
            </div>
            
          </div>
  
        </div>

      </section>
  
);
};

export default Signup;