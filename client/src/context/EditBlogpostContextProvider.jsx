import React, { useState } from "react";
import EditBlogpostContext from "./editBlogpostContext";

const EditBlogpostContextProvider = ({ children }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [blogpostId, setBlogpostId] = useState("");

  return (
    <EditBlogpostContext.Provider
      value={{ editToggle, setEditToggle, blogpostId, setBlogpostId }}
    >
      {children}
    </EditBlogpostContext.Provider>
  );
};

export default EditBlogpostContextProvider;
