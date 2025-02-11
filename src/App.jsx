import React from "react";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

const App = () => {
  return (
    <div>
      <AppRoutes />
      <ToastContainer />
    </div>
  );
};

export default App;
