import React from "react";
import { Navigate } from "react-router-dom";

export default function BlockRoute({ children }) {
   return !children.props.loggedIn ? children : <Navigate to="/movies" />;
}
