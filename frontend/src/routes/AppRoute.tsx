import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, Login, Registration } from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import { useContext, useEffect } from "react";
import { UserContext } from "../hooks/UserContext";
import { PageNotFound } from "../components";
import PublicWrapper from "../pages/public/PublicWrapper";
import { useDispatch, useSelector } from "react-redux";
import { InitialStateInterface } from "../types/user.types";
import { RootState } from "../store";

function AppRoute() {
  const { currentUser, setCurrentUser } = useContext(UserContext) as any;



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_SKILL" });
  }, [dispatch]);


  const user: InitialStateInterface = useSelector(
    (state: RootState) => state.user
  );
  setCurrentUser(user.token);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<PublicWrapper />} />
        {!currentUser && !localStorage.getItem("userToken") ? (
          <>
            <Route path="/*" element={<Navigate to={"/"} />} />
            <Route path="dashboard/*" element={<Navigate to={"/login"} />} />

            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
          </>
        ) : (
          <>
            <Route
              path="/*"
              element={
                <ProtectedRoute path="dashboard" element={<Dashboard />} />
              }
            />
          </>
        )}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
