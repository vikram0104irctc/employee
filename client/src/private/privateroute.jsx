import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PrivateRouter = (props) => {
  const { Component } = props;
  let navigate = useNavigate();
  let is_login = useSelector((state) => state.login);
  useEffect(() => {
    if (!is_login) {
      navigate("/login");
    }
  }, [navigate, is_login]);
  return <Component />;
};
