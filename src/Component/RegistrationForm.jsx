import React from 'react';
import './RegistrationForm.css';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import google from '../images/google.png';
import arrow from '../images/arrow.png';
import questionmark from '../images/questionmark.png';
import next from '../images/next_arrow_right_icon_141962.png'

const RegisterForm = () => {

  return (
    <>
      <form className="container1" >
        <div id="first">
          <img src={arrow} alt="" />
          <button style={{ background: 'none' }}>Back</button>
        </div>

        <div>
          <h3>Welcome To Lystproof!</h3>
        </div>
        <div id="input-style">
          <label>Organization Name</label>
          <input
            id="box"
            type="text"
            name="organizationName"
          />
        </div>
        <div id="input-style">
          <label>Name</label>
          <input id="box" type="text" name="name" />
        </div>
        <div id="input-style">
          <label>Email</label>
          <input id="box" type="email" name="email" />
        </div>
        <div id="input-style">
          <label>
            Password{' '}
            <img src={questionmark} alt="" />
          </label>
          <input
            id="box"
            type="password"
            name="password"
          />
        </div>
        <div>
          <label>
            <input type="checkbox" name="termsAccepted" />
            I accept the <span style={{ textDecoration: 'underline', color: '#6f36bc' }}>terms and conditions</span>
          </label>
        </div>

        <div id="end">
          <button id="register-btn" type="submit">
            Register Now

          </button>
        </div>

        <h5 style={{ marginLeft: '125px', marginTop: '20px' }}>Sign Up With</h5>
        <div style={{ marginLeft: '100px' }}>
          <button type="button" >
            <img src={twitter} alt="Twitter" />
          </button>
          <button type="button" >
            <img src={linkedin} alt="LinkedIn" />
          </button>
          <button type="button" >
            <img src={google} alt="Google" />
          </button>
        </div>
        <div>
          <h5 style={{ marginLeft: '80px' }}>
            Already Have An Account?
            <button style={{ background: 'none', color: 'blue' }}>Login</button>
          </h5>
        </div>
        <div>
          <h5 id="last" style={{ marginLeft: '60px' }}>©2022, MindsBeam Technologies Inc</h5>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
