import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  MessageManagment,
  ProjectManagment,
  SkillManagment,
} from "../pages/index";
import DashboardHeader from "../pages/dashboard/DashboardHeader";
import { Footer } from "../components";

interface ProtectedRouteProps {
  path: string;
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, element }) => {
  return (
    <>
      <DashboardHeader />
      <Routes>
        <Route path="/*" element={<Navigate to="/dashboard" />} />
        <Route index path={path} element={element} />
        <Route path={`${path}/skills`} element={<SkillManagment />} />
        <Route path={`${path}/projects`} element={<ProjectManagment />} />
        <Route path={`${path}/messages`} element={<MessageManagment />} />
      </Routes>
      <Footer />
    </>
  );
};

export default ProtectedRoute;
