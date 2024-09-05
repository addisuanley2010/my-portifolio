import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, Login, Registration } from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import { useContext } from "react";
import { UserContext } from "../hooks/UserContext";
import { PageNotFound } from "../components";
import PublicWrapper from "../pages/public/PublicWrapper";

function AppRoute() {
  const { currentUser } = useContext(UserContext) as any;

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<PublicWrapper />} />

        {!currentUser ? (
          <>
            <Route path="/*" element={<Navigate to={"/"} />} />
            <Route path="dashboard" element={<Navigate to={"/login"} />} />

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
