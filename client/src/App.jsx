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

const App = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [user, setUser] = useState("");

  const headers = {
    Authorization: `Brearer ${accessToken}`,
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/v1/me`, { headers });
        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.log(`Error fetching user data: ${err}`);
      }
    };
    fetchUser();
  }, []);

  return (
    <BrowserRouter>
      <MainLayout user={user}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/blog/:_id" element={<Blogpost />} />
          <Route
            path="/dashboard"
            element={
              user && user.role && user.role === "admin" && <Dashboard />
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/404" element={<Page_404 />} />
          <Route path="/500" element={<Page_500 />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
