import React, { useState, useEffect, useContext } from "react";
import Context from "./context/context";

// * ROUTING MODULES
import { Routes, Route, Navigate } from "react-router-dom";

// * PAGES IMPORT
import Home from "./pages/user/Home";
import Blogpost from "./pages/user/SingleBlogpostPage";
import Dashboard from "./pages/admin/DashboardPage";
import SignIn from "./pages/auth/SignInPage";
import SignUp from "./pages/auth/SignUpPage";
import Lost404Page from "./pages/lost/Lost404Page";
import Lost500Page from "./pages/lost/Lost500Page";

// * LAYOUTS IMPORT
import MainLayout from "./layouts/MainLayout";
import axios from "axios";

const App = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [user, setUser] = useState("");
  const { setUserLoggedIn, signOut } = useContext(Context);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  useEffect(() => {
    const fetchUser = async () => {
      axios
        .get(`http://localhost:8000/api/v1/me`, { headers })
        .then((res) => {
          setUser(res.data.user);
          setUserLoggedIn(true);
        })
        .catch((error) => {
          if (
            error.message === "Request failed with status code 401" ||
            error === "AxiosError: Request failed with status code 401"
          ) {
            signOut("/");
          }
        });
    };
    fetchUser();
  }, []);

  return (
    <MainLayout user={user}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:_id" element={<Blogpost />} />
        <Route
          path="/dashboard"
          element={user && user.role && user.role === "admin" && <Dashboard />}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/404" element={<Lost404Page />} />
        <Route path="/500" element={<Lost500Page />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
