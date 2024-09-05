import { useContext } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../hooks/UserContext";

const DashboardHeader: React.FC = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);
  const location = useLocation();

  const logout = () => {
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between gap-8">
        <div className="flex items-center space-x-4">
          <NavLink
            to={"dashboard"}
            className={`hover:text-emerald-500 ${
              location.pathname === "/dashboard"
                ? "text-emerald-500 font-bold underline"
                : ""
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to={"dashboard/skills"}
            className={`hover:text-emerald-500 ${
              location.pathname === "/dashboard/skills"
                ? "text-emerald-500 font-bold underline"
                : ""
            }`}
          >
            Skills
          </NavLink>
          <NavLink
            to={"dashboard/projects"}
            className={`hover:text-emerald-500 ${
              location.pathname === "/dashboard/projects"
                ? "text-emerald-500 font-bold underline"
                : ""
            }`}
          >
            Projects
          </NavLink>
          <NavLink
            to={"dashboard/messages"}
            className={`hover:text-emerald-500 ${
              location.pathname === "/dashboard/messages"
                ? "text-emerald-500 font-bold underline"
                : ""
            }`}
          >
            Messages
          </NavLink>
        </div>
        <div>
          <button
            onClick={logout}
            className="italic text-red-500   py-2 rounded-lg hover:text-red-300 "
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
