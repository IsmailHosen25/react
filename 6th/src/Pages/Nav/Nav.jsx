import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
export default function Nav() {
  const { logedin, setlogedin } = useAuth();
  return (
    <div className="nav">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contect"}>Contect</Link>
      {logedin ? (
        <Link to={"/profile"}>Profile</Link>
      ) : (
        <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/sign"}>Sign Up</Link>
        </>
      )}
    </div>
  );
}
