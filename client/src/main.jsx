import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/mainStyles.scss";
import EditBlogpostContextProvider from "./context/EditBlogpostContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <EditBlogpostContextProvider>
    <App />
  </EditBlogpostContextProvider>
);
