import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
   return children.props.loggedIn ? children : <Navigate exact to="/" />;
}
