import  { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../hooks/UserContext";

const Logout = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);
  setCurrentUser(null);
  navigate("/login");
};

export default Logout;