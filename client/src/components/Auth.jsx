import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateLogin } from "../redux/actions";
import axios from "axios";
const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && !confirmPassword)) {
      alert("Please fill out all fields.");
      return;
    }
    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (isLogin) {
      await handleLogin();
    } else {
      await handleSignup();
    }
  };

  const handleLogin = async () => {
    try {
      let obj = { email: email, password: password };
      axios
        .post("https://employee-z4q3.onrender.com/api/auth/login", obj)
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.data.authorization));
          dispatch(updateLogin(true));
          alert("Login successful!");
          setEmail("");
          setPassword("");
          navigate("/");
        })
        .catch((err) => {
          alert(err);
        });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSignup = async () => {
    try {
      let obj = { email, password };
      axios
        .post("https://employee-z4q3.onrender.com/api/auth/signup", obj)
        .then(() => {
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          alert("Signup successful!");
        })
        .catch(() => {
          alert("Signup failed. Please try again.");
        });
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] mt-[60px]">
      <div className="w-full max-w-md p-8 rounded-lg shadow-2xl bg-white">
        <div className="flex justify-between mb-6">
          <button
            className={`w-1/2 py-2 font-semibold ${
              isLogin
                ? "bg-blue-500 text-white rounded-lg"
                : "bg-gray-100 text-gray-700"
            } rounded-l-lg`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-2 font-semibold ${
              !isLogin
                ? "bg-blue-500 text-white rounded-lg"
                : "bg-gray-100 text-gray-700"
            } rounded-r-lg`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <h2 className="text-2xl font-bold text-center text-gray-800">
            {isLogin ? "Login Form" : "Signup Form"}
          </h2>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          )}
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          {isLogin ? "Not a member?" : "Already have an account?"}{" "}
          <span
            className="font-semibold text-blue-500 cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Signup now" : "Login here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignupForm;
