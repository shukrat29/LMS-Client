import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, DashboardPage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />

      {/* Private Routes */}
      <Route path="/user" element={<DashboardPage />} />
    </Routes>
  );
};

export default AppRoutes;
