import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/Register-Image.png";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-full max-w-1xl h-4/5 pl-14 pr-14 bg-white overflow-hidden">
        <div
          className="flex-1 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="flex-1 pl-20 flex flex-col justify-center items-center">
          <div className="text-2xl font-bold mb-8 text-green-700">
            Create an account
          </div>
          <form className="w-full pl-36 pr-36" onSubmit={handleRegister}>
            <div className="mb-4 w-full">
              <input
                type="text"
                placeholder="First Name"
                required
                className="w-full p-3 border border-gray-500 rounded"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="text"
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
                type="tel"
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
            <div className="flex items-center justify-center mt-4">
              <div className="w-1/5 border-b border-gray-300"></div>
              <span className="mx-2 text-gray-500">or</span>
              <div className="w-1/5 border-b border-gray-300"></div>
            </div>
            <button
              type="button"
              onClick={handleLoginRedirect}
              className="w-full mt-4 py-3 bg-green-600 text-white rounded hover:bg-green-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
