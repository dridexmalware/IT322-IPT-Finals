import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import background from "../assets/Register-Image.png";

const API_ENDPOINTS = {
  register: "http://127.0.0.1:8000/api/register/",
};

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    barangay: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(API_ENDPOINTS.register, {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        barangay: formData.barangay,
      });
      console.log('Registration successful:', response.data);
      localStorage.setItem('token', response.data.token);
      navigate("/home");
    } catch (error) {
      console.error("Registration failed:", error.response ? error.response.data : error.message);
    }
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
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-500 rounded"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-500 rounded"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-500 rounded"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-500 rounded"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-500 rounded"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="text"
                name="barangay"
                placeholder="Barangay"
                value={formData.barangay}
                onChange={handleChange}
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
