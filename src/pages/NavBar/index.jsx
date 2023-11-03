import React , {useContext , useEffect} from "react";
import { NavLink, Outlet  } from "react-router-dom";
import UserAuthContext from "../../context/user/UserAuthContext";
import { useNavigate } from "react-router-dom";

export default function navbar() {
  const { isloggedin, setIsLoggedIn } = useContext(UserAuthContext);
  const navigate = useNavigate();


  const handleLogin = () => {
    setIsLoggedIn(false); 
    navigate('/');
  };
  return (
    <>
      <div className="py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-2xl font-bold">
            <NavLink to="/">
              <img
                src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/6493fc945ac55c5cf0b0243c_Logo.svg"
                loading="eager"
                alt=""
                className="logo"
              />
            </NavLink>
          </div>

          <div className="flex ">
            <NavLink
              to="/"
              className="text-black text-xl hover:font-bold hover:scale-105 hover:text-blue-500 cursor-pointer px-3 transition-all duration-300 ease-in-out"
            >
              Home
            </NavLink>
            <div className="flex items-center">
              <NavLink
                to="products"
                className="text-black text-xl hover:font-bold hover:scale-105 hover:text-blue-500 cursor-pointer px-3 transition-all duration-300 ease-in-out"
              >
                Products
              </NavLink>
              <img
                src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406d4eaf0cb93c03b01ae_Nav%20Dropdown%20Chevron.svg"
                loading="eager"
                alt=""
                className="nav-dropdown-icon hidden"
              ></img>
            </div>
             
            <NavLink
              to="cart"
              className="text-black text-xl hover:font-bold hover:scale-105 hover:text-blue-500 cursor-pointer px-3 transition-all duration-300 ease-in-out"
            >
              Cart
            </NavLink>
            <NavLink
              to="check-out"
              className="text-black text-xl hover:font-bold hover:scale-105 hover:text-blue-500 cursor-pointer px-3 transition-all duration-300 ease-in-out"
            >
              Check-out
            </NavLink>
          </div>

          <div>
            <NavLink
              to={(!isloggedin) ? "/log-in" : "/"} 
              className=" hover:bg-[yellow] hover:text-black text-white text-2xl font-bold p-2 bg-blue-500 hover:scale-105 cursor-pointer rounded-lg transition-all duration-300 ease-in-out"
          onClick={handleLogin}>
              {(!isloggedin) ? "Sign-In" : "Sign-Out"} 
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
