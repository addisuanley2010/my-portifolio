import { NavLink, useLocation } from "react-router-dom";
import { InitialStateInterface } from "../../types/user.types";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Logout from "../../utils/Logout";

const DashboardHeader: React.FC = () => {
  const location = useLocation();

  const user: InitialStateInterface = useSelector(
    (state: RootState) => state.user
  );

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
          <NavLink
            to={"dashboard/service"}
            className={`hover:text-emerald-500 ${
              location.pathname === "/dashboard/service"
                ? "text-emerald-500 font-bold underline"
                : ""
            }`}
          >
            Service
          </NavLink>
          <NavLink
            to={"dashboard/education"}
            className={`hover:text-emerald-500 ${
              location.pathname === "/dashboard/education"
                ? "text-emerald-500 font-bold underline"
                : ""
            }`}
          >
            Education
          </NavLink>
        </div>
        <div>
          <Logout />
          <br />
          Username: {user.user.user_name}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
