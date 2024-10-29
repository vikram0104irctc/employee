import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentEditEmployee, updateData } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const data = useSelector((state) => state.data);
  const token = JSON.parse(localStorage.getItem("token"));
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://employee-z4q3.onrender.com/api/employees/${token}`)
      .then((res) => {
        dispatch(updateData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleDelete(id) {
    axios
      .delete(`https://employee-z4q3.onrender.com/api/employees/${token}/${id}`)
      .then((res) => {
        axios
          .get(`https://employee-z4q3.onrender.com/api/employees/${token}`)
          .then((res) => {
            dispatch(updateData(res.data));
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEdit(ele) {
    dispatch(currentEditEmployee(ele));
    navigate("/editform");
  }

  return (
    <div className="max-w-[1360px] m-auto mt-[60px] pt-5 flex justify-center gap-4 px-2">
      {data && data.length > 0 ? (
        data.map((ele) => {
          return (
            <div
              key={ele._id}
              className="p-[20px] border-[1px solid #ccc] rounded-md bg-white shadow-md"
            >
              <p>
                Name : {ele.firstName} {ele.lastName}
              </p>
              <p>Email : {ele.email}</p>
              <p>Department : {ele.department}</p>
              <p>Salary : {ele.salary}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleEdit(ele)}
                  className="py-1 px-4 bg-black rounded-md text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(ele._id)}
                  className="py-1 px-4 bg-black rounded-md text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
