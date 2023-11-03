import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserAuthContext from "../../context/user/UserAuthContext";

export default function Protected(props) {
  const { isloggedin } = useContext(UserAuthContext);
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isloggedin) {
      navigate('/log-in');
    }
  }, [isloggedin, navigate]);

  return (
    <div>
      <Component />
    </div>
  );
}
