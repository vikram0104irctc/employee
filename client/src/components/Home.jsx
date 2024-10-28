import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../redux/actions";

export const Home = () => {
  const data = useSelector((state) => state.data);
  const token = JSON.parse(localStorage.getItem("token"));
  let dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`https://employee-z4q3.onrender.com/api/employees${token}`)
      .then((res) => {
        dispatch(updateData(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="max-w-[1360px] m-auto mt-[60px] pt-5">
      {data && data.length > 0 ? (
        data.map((ele) => {
          return (
            <div
              key={ele._id}
              className="p-[20px] border-[1px solid #ccc] rounded-[5px]"
            >
              <p>
                {ele.firstName} {ele.lastName}
              </p>
              <p>{ele.email}</p>
              <p>{ele.department}</p>
              <p>{ele.salary}</p>
            </div>
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
