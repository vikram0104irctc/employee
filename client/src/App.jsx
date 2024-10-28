import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginSignupForm from "./components/Auth";
import Navbar from "./components/Navbar";
import { PrivateRouter } from "./private/privateroute";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="bg-slate-200 min-h-[92vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRouter Component={Home}/>} />
        <Route path="/login" element={<LoginSignupForm />} />
      </Routes>
    </div>
  );
}

export default App;
