import React from "react";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
import axios from "axios";
import "../../styles/componentsStyles/adminComponentsStyles/createBlogpostStyles.scss";

const accessToken = localStorage.getItem("accessToken");
const headers = {
  Authorization: `Bearer ${accessToken}`,
};

const BlogpostSchema = Yup.object().shape({
  title: Yup.string()
    .required("Enter blogpost title")
    .min(2, "Title cannot be shorter than 2 characters")
    .max(120, "Title cannot be longer than 120 characters"),
  content: Yup.string()
    .required("Enter blogpost content")
    .min(80, "Content cannot be shorter than 80 characters")
    .max(50000, "Content cannot be longer than 50000 characters"),
});

const CreateBlogpostComponent = () => {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          content: "",
        }}
        validationSchema={BlogpostSchema}
        onSubmit={(values) => {
          console.log("values:", values);
          axios
            .post(`http://localhost:8000/api/v1/createblogpost`, values, {
              headers,
            })
            .then((res) => {
              console.log(res.message);
              window.location.reload();
            })
            .catch((err) => {
              console.log(res.error);
            });
        }}
      >
        <Form className="create-blogpost-form">
          <div className="blogpost-title">
            <label htmlFor="title">Enter Blogpost Title</label>
            <Field
              type="text"
              name="title"
              id="title"
              placeholder="Enter blogpost title..."
              autoComplete="off"
            />
            <ErrorMessage
              className="error-message"
              name="title"
              component={"div"}
            />
          </div>
          <div className="blogpost-content">
            <label htmlFor="content">Enter Blogpost Content</label>
            <Field
              as="textarea"
              name="content"
              id="content"
              placeholder="Enter blogpost content..."
              autoComplete="off"
            />
            <ErrorMessage
              className="error-message"
              name="content"
              component={"div"}
            />
          </div>
          <button type="submit">Publish</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateBlogpostComponent;
