import React, { useState, useEffect, useRef } from "react";

// * ROUTING MODULES
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// * PAGES IMPORT
import Home from "./pages/user/Home";
import Blogpost from "./pages/user/Blogpost";
import Dashboard from "./pages/admin/Dashboard";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Page_404 from "./pages/lost/Page_404";
import Page_500 from "./pages/lost/Page_500";

// * LAYOUTS IMPORT
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/blog/:_id"
          element={
            <MainLayout>
              <Blogpost />
            </MainLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/signin"
          element={
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          }
        />
        <Route path="/404" element={<Page_404 />} />
        <Route path="/500" element={<Page_500 />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
