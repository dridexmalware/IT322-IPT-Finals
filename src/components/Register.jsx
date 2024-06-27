import React from 'react';
import logo from '../assets/AIDA-Logo.png';
import background from '../assets/Register-Image.png';

function Register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-full max-w-1xl h-4/5 pl-14 pr-14 bg-white overflow-hidden">
        <div
          className="flex-1 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="flex-1 pl-20 flex flex-col justify-center items-center">
          <div className="text-2xl font-bold mb-8 text-green-700">Create an account</div>
          <form className="w-full pl-36 pr-36">
            <div className="mb-4 w-full">
              <input
                type="first name"
                placeholder="First Name"
                required
                className="w-full p-3 border border-gray-500 rounded"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="last name"
                placeholder="Last Name"
                required
                className="w-full p-3 border border-gray-500 rounded"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-500 rounded"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full p-3 border border-gray-500 rounded"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="phone number"
                placeholder="Phone Number"
                required
                className="w-full p-3 border border-gray-500 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 py-3 bg-green-600 text-white rounded hover:bg-green-500"
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-center ">
              <div className="flex items-center justify-center">
                <div className="w-1/5 border-b border-gray-300"></div>
                <span className="mx-2 text-gray-500">or</span>
                <div className="w-1/5 border-b border-gray-300"></div>
              </div>
              <button
                type="button"
                className="mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 pl-36 pr-36 border border-gray-400 rounded shadow flex items-center justify-center w-full"
              >
                <img
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  alt="Google logo"
                  className="mr-2"
                />
                Sign up with Google
              </button>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Register;