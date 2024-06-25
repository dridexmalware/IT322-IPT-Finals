import React from 'react';

function Register() {
  return (
    <div className="form-container">
      <h2>Create an account</h2>
      <form>
        <div className="form-group">
          <input type="text" placeholder="First Name" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Phone Number" required />
        </div>
        <button type="submit" className="button">Register</button>
        <div>
          <span>or</span>
        </div>
        <button type="button" className="button button-google">
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" />
          Sign up with Google
        </button>
      </form>
    </div>
  );
}

export default Register;
