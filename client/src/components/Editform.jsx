import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const EditForm = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.currEditEmployee);
  const [formData, setFormData] = useState({
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    email: data.email || "",
    department: data.department || "",
    salary: data.salary || "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.department ||
      !formData.salary
    ) {
      alert("All fields are required");
      return;
    }

    axios
      .put(
        `https://employee-z4q3.onrender.com/api/employees/${token}/${data._id}`,
        formData
      )
      .then(() => {
        alert("Employee updated successfully");
        navigate("/");
      })
      .catch(() => {
        alert("Failed to update employee");
      });
  };

  return (
    <div className="max-w-[1360px] m-auto mt-10 pt-5 flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[340px] p-5 bg-white shadow-lg rounded-lg space-y-4"
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="department"
          required
          value={formData.department}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Department</option>
          <option value="Tech">Tech</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
        </select>
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          required
          value={formData.salary}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
