import React, { useState } from "react";
import EditBlogpostContext from "./editBlogpostContext";

const EditBlogpostContextProvider = ({ children }) => {
  const [editToggle, setEditToggle] = useState(false);

  return (
    <EditBlogpostContext.Provider value={{ editToggle, setEditToggle }}>
      {children}
    </EditBlogpostContext.Provider>
  );
};

export default EditBlogpostContextProvider;
