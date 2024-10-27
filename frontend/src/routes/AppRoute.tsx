import {  Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, Login, Registration } from "../pages";
import { useEffect } from "react";
import { Loading, PageNotFound } from "../components";
import PublicWrapper from "../pages/public/PublicWrapper";
import { useDispatch, useSelector } from "react-redux";
import { InitialStateInterface } from "../types/user.types";
import { RootState } from "../store";
import AdminProtectedRoute from "./AdminProtectedRoute";
import UserProtectedRoute from "./UserProtectedRoute";
import User from "../pages/user/User";

function AppRoute() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_SKILL" });
    dispatch({ type: "GET_PROJECT" });
    dispatch({ type: "GET_SERVICE" });
     dispatch({ type: "GET_MESSAGE" });
    dispatch({ type: "CHECK_USER" });

  }, [dispatch]);

  const { isAuthenticated, user, loading }: InitialStateInterface = useSelector(
    (state: RootState) => state.user
  );
  if (loading) {
    return <Loading />;
  }

  return (
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route index path="/" element={<PublicWrapper />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
            <Route path="dashboard/*" element={<Navigate to={"/login"} />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
          </>
        ) : user.role === "admin" ? (
          <>
            <Route
              path="/*"
              element={
                <AdminProtectedRoute path="dashboard" element={<Dashboard />} />
              }
            />
          </>
        ) : (
          <>
            <Route
              path="/*"
              element={
                <UserProtectedRoute path="user" element={<User />} />
              }
            />
          </>
        )}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
  );
}

export default AppRoute;
