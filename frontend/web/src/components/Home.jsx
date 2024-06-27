import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/Profile.webp";

function Home() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "John Benedict",
    lastName: "Bernardo",
    email: "johnbenedict@gmail.com",
    phone: "0912 345 6789",
    barangay: "Amoros",
  });

  const navigate = useNavigate();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl h-4/5 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex-1 p-8 flex flex-col items-center">
          <div className="text-2xl font-bold mb-8 text-green-700">User Information</div>
          <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full mb-8" />
          {isEditing ? (
            <form className="w-full">
              <div className="mb-4 w-full">
                <input
                  type="text"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="tel"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  name="barangay"
                  value={userData.barangay}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Barangay"
                />
              </div>
              <button
                type="button"
                onClick={handleSave}
                className="w-full py-3 bg-green-600 text-white rounded hover:bg-green-500"
              >
                Save
              </button>
            </form>
          ) : (
            <div className="w-full">
              <p className="mb-4"><b>First Name:</b> {userData.firstName}</p>
              <p className="mb-4"><b>Last Name:</b> {userData.lastName}</p>
              <p className="mb-4"><b>Email:</b> {userData.email}</p>
              <p className="mb-4"><b>Phone:</b> {userData.phone}</p>
              <p className="mb-4"><b>Barangay:</b> {userData.barangay}</p>
              <button
                type="button"
                onClick={handleEdit}
                className="w-full mt-4 py-3 bg-green-600 text-white rounded hover:bg-green-500"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="w-full mt-4 py-3 bg-red-600 text-white rounded hover:bg-red-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
