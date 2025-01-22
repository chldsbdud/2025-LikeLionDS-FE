import React from "react";
import { Navigate } from "react-router-dom";
import { isAdminLoggedIn } from "./utils/Admin";

const ProtectedRoute = ({ children }) => {
    return isAdminLoggedIn() ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
