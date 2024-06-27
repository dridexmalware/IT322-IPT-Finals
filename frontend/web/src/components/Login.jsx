import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/AIDA-Logo.png';
import background from '../assets/Landing-Image.png';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-full max-w-1xl h-4/5 pl-14 pr-14 bg-white overflow-hidden">
        <div
          className="flex-1 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="flex-1 pl-20 flex flex-col justify-center items-center">
          <img src={logo} alt="Logo" className="w-24 mb-8" />
          <form className="w-full pl-36 pr-36" onSubmit={handleLogin}>
            <div className="mb-4 w-full">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-500 rounded"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-500 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded hover:bg-green-500"
            >
              Login
            </button>
          </form>
          <div className="mt-8 text-center">
            <a href="/forgot-password" className="text-gray-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="mt-8 text-center text-gray-500">
            Don't have an account? 
            <a href="/register" className="text-gray-500 hover:underline ml-1">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
