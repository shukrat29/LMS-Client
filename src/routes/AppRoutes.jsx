import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  SignUpPage,
  SignInPage,
  ForgetPasswordPage,
  BookLandingPage,
} from "../pages";
import DefaultLayout from "../components/layouts/DefaultLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="forget-password" element={<ForgetPasswordPage />} />
      </Route>

      {/* Private Routes */}
      <Route path="/user" element={<DashboardPage />} />
    </Routes>
  );
};

export default AppRoutes;
