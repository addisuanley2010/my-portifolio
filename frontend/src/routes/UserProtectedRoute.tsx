import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  MessageManagment,
  ProjectManagment,
  SkillManagment,
} from "../pages/index";
import { Footer } from "../components";
import Educations from "../pages/dashboard/EducationManagment";
import Services from "../pages/dashboard/ServiceManagment";

interface ProtectedRouteProps {
  path: string;
  element: React.ReactNode;
}

const UserProtectedRoute: React.FC<ProtectedRouteProps> = ({
  path,
  element,
}) => {
  return (
    <>
    <h4>This is User Header</h4>
      <Routes>
        <Route path="/*" element={<Navigate to="/dashboard" />} />
        <Route index path={path} element={element} />
        <Route path={`${path}/skills`} element={<SkillManagment />} />
        <Route path={`${path}/projects`} element={<ProjectManagment />} />
        <Route path={`${path}/messages`} element={<MessageManagment />} />
        <Route path={`${path}/education`} element={<Educations />} />
        <Route path={`${path}/service`} element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
};

export default UserProtectedRoute;
