import axios from "axios";
import { useNavigate } from "react-router-dom";

export const EmployeeForm = () => {
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let token = JSON.parse(localStorage.getItem("token"));
    let firstName = e.target[0].value;
    let lastName = e.target[1].value;
    let email = e.target[2].value;
    let department = e.target[3].value;
    let salary = Number(e.target[4].value);
    if (!firstName || !lastName || !email || !department || !salary) {
      alert("All fields are required");
      return;
    }
    let obj = {
      firstName,
      lastName,
      email,
      department,
      salary,
    };
    axios
      .post(`https://employee-z4q3.onrender.com/api/employees/${token}`, obj)
      .then(() => {
        alert("Employee added successfully");
        navigate("/");
      })
      .catch(() => {
        alert("Failed to add employee");
      });
  }

  return (
    <div className="max-w-[1360px] m-auto mt-10 pt-5 flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[340px] p-5 bg-white shadow-lg rounded-lg space-y-4"
      >
        <input
          type="text"
          placeholder="First Name"
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Enter Email"
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Department</option>
          <option value="Tech">Tech</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
        </select>
        <input
          type="number"
          placeholder="Salary"
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
