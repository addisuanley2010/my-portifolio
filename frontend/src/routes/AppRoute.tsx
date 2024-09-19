import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, Login, Registration } from "../pages";
import { useEffect } from "react";
import { Loading, PageNotFound } from "../components";
import PublicWrapper from "../pages/public/PublicWrapper";
import { useDispatch, useSelector } from "react-redux";
import { InitialStateInterface } from "../types/user.types";
import { RootState } from "../store";
import AdminProtectedRoute from "./AdminProtectedRoute";
import UserProtectedRoute from "./UserProtectedRoute";

function AppRoute() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_SKILL" });
    dispatch({ type: "CHECK_USER" });
    dispatch({ type: "GET_PROJECT" });
  }, [dispatch]);

  const { isAuthenticated, user, loading }: InitialStateInterface = useSelector(
    (state: RootState) => state.user
  );
  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
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
                <UserProtectedRoute path="dashboard" element={<Dashboard />} />
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
