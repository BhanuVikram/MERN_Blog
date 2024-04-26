import React, { useState, useEffect, useRef } from "react";

// * ROUTING MODULES
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// * PAGES IMPORT
import Home from "./pages/user/Home";
import Blogpost from "./pages/user/SingleBlogpostPage";
import Dashboard from "./pages/admin/DashboardPage";
import SignIn from "./pages/auth/SignInPage";
import SignUp from "./pages/auth/SignUpPage";
import Page_404 from "./pages/lost/Lost404Page";
import Page_500 from "./pages/lost/Lost500Page";

// * LAYOUTS IMPORT
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

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
