import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called at initial render(just once)
  // if dependency array is [btnName] => called everytime btnName is updated
  
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div className="flex justify-between shadow-lg bg-yellow-200 " >
      <div className="logo-container">
        <img className="w-20 h-20 " src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-bold">
            Online Status: {onlineStatus ? "🟢": "🔴"}
          </li>
          <li className="px-4 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold"> 🛒 Cart</li>
          <button
            className="login-btn px-4 font-bold bg-orange-300 rounded-lg py-1 "
            onClick={() => {
              //if btnName === login then change to logout otherwise change to login
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
