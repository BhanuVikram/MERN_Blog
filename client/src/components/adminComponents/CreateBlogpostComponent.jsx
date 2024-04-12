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
  title: Yup.string().required("Enter blogpost title"),
  content: Yup.string().required("Enter blogpost content"),
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
            })
            .catch((err) => {
              console.log(res.error);
            });
        }}
      >
        <Form>
          <label htmlFor="title">Blogpost Title:</label>
          <Field
            type="text"
            name="title"
            id="title"
            placeholder="Enter blogpost title..."
            autoComplete="off"
          />
          <ErrorMessage name="title" component={"div"} />

          <label htmlFor="content">Blogpost Content:</label>
          <Field
            as="textarea"
            name="content"
            id="content"
            rows={20}
            cols={100}
            placeholder="Enter blogpost content..."
            autoComplete="off"
          />
          <ErrorMessage name="content" component={"div"} />

          <button type="submit">Publish</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateBlogpostComponent;
