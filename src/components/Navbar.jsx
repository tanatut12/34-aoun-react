import React from "react";
import { Link, Outlet } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div className="bg-yellow-300 h-16 flex justify-end items-center space-x-4 pr-4 border-b-2 border-black">
        <Link to="/" className="text-xl">
          Home
        </Link>
        <Link to="/Owner" className="text-xl">
          Owner
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default NavBar;
