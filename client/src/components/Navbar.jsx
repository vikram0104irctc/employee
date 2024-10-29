import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateLogin } from "../redux/actions";

const Navbar = () => {
  const login = useSelector((state) => state.login);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  function handleLogout() {
    localStorage.removeItem("token");
    dispatch(updateLogin(false));
    navigate("/login");
  }

  return (
    <div className="w-full fixed top-0 left-0 shadow-md z-50 bg-white">
      <div className="max-w-[1360px] m-auto py-3 px-4 flex justify-between">
        <img onClick={() => navigate("/")} src="/logo.svg" alt="Logo" />
        {login ? (
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/addemployee")}
              className="py-2 px-4 bg-black text-white rounded-md"
            >
              AddEmp
            </button>
            <button
              onClick={handleLogout}
              className="py-2 px-4 bg-black text-white rounded-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="py-2 px-4 bg-black text-white rounded-md"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
