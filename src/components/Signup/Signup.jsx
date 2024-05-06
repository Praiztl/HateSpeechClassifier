import React from 'react';
import { Link } from 'react-router-dom';
import signupLogo from '../../assets/img/signupLogo.svg';
import './Signup.css'


const Signup = () => {
  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="card">
          <h3 className="heading">Analyze Tweets</h3>
          <p className="subtitle">Discover hate speech with precision.</p>
          <img src={signupLogo} alt="" />
          <p className="subtitlee">Analyze tweets with ease.</p>
        </div>
      </div>
      <div className="getstarted">
        <form>
          <h3>Get Started Now</h3>
          <p className="subtitlee">Experience accurate hate speech detection.</p>
          <input type="text" placeholder="Enter a sample tweet" />
          <div className="button-container">
            <Link to="/components/Statistics/Statistics" >
              <button>Classify</button>
              
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};

export default Signup;