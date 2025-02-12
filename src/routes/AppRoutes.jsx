import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  SignUpPage,
  SignInPage,
  ForgetPasswordPage,
  BookLandingPage,
  Books,
  NewBookPage,
  EditBookPage,
  ReviewsPage,
  UserPage,
  Profile,
  BorrowPage,
} from "../pages";
import DefaultLayout from "../components/layouts/DefaultLayout";
import UserLayout from "../components/layouts/UserLayout";

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
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="books" element={<Books />} />
        <Route path="new-book" element={<NewBookPage />} />
        <Route path="edit-book" element={<EditBookPage />} />
        <Route path="borrow-history" element={<BorrowPage />} />
        <Route path="book-landing" element={<BookLandingPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="all" element={<UserPage />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
