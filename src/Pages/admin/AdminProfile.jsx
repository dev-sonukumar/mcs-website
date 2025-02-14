import React from "react";

const AdminProfile = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Admin Profile</h2>
      <div className="mb-4">
        <p className="text-lg font-semibold">Name: John Doe</p>
        <p className="text-lg font-semibold">Email: admin@example.com</p>
        <p className="text-lg font-semibold">Role: Administrator</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Edit Profile
      </button>
    </div>
  );
};

export default AdminProfile;
