import React from "react";
import { Outlet } from "react-router";

const Nav = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-20 h-full bg-yellow-300"></div>
      <Outlet />
    </div>
  );
};

export default Nav;
