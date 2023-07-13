import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";


import { isAuthenticated } from "./services/auth";

function PrivateRoute({ children }) {
  const auth = isAuthenticated();
  return auth ? <>{children}</> : <Navigate to="/" />;
}

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}