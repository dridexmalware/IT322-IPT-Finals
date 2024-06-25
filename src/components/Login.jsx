import React from 'react';
import logo from '../assets/AIDA-Logo.png';
import background from '../assets/Landing-Image.png';

function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-full max-w-4xl h-4/5 bg-white overflow-hidden">
        <div
          className="flex-1 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="flex-1 p-10 flex flex-col justify-center items-center">
          <img src={logo} alt="Logo" className="w-24 mb-8" />
          <form className="w-full">
            <div className="mb-4 w-full">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;