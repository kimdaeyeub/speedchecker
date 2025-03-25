import { Home, Target, Timer } from "lucide-react";
import { NavLink, Outlet } from "react-router";

const Nav = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="h-full bg-white border-r border-gray-200 flex flex-col">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "p-5 border-b border-gray-200 bg-gray-100"
              : "p-5 border-b border-gray-200"
          }
        >
          <Home size={30} />
        </NavLink>
        <NavLink
          to="/reaction-time"
          className={({ isActive }) =>
            isActive
              ? "p-5 border-b border-gray-200 bg-gray-100"
              : "p-5 border-b border-gray-200"
          }
        >
          <Timer size={30} />
        </NavLink>
        <NavLink
          to="/accuracy"
          className={({ isActive }) =>
            isActive
              ? "p-5 border-b border-gray-200 bg-gray-100"
              : "p-5 border-b border-gray-200"
          }
        >
          <Target size={30} />
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
