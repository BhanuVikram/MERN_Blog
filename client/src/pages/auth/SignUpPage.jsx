import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
import axios from "axios";
import "../../styles/pagesStyles/authPagesStyles/authPageStyles.scss";

const SignUpSchema = Yup.object().shape({
  firstname: Yup.string().required("* First name is required"),
  lastname: Yup.string().required("* Last name is required"),
  username: Yup.string().required("* Username is required"),
  email: Yup.string()
    .email("* Enter a valid email address")
    .required("* Email is required"),
  password: Yup.string()
    .min(8, "* Password must be at least 8 characters")
    .required("* Password is required"),
});

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            axios
              .post(`http://localhost:8000/api/v1/signup`, values)
              .then((res) => {
                console.log(res.message);
                navigate("/signin");
              })
              .catch((error) => {
                console.log(error);
                if (error.response) {
                  alert(error.response.data.message || "An error occurred");
                } else if (error.request) {
                  alert("No response was received");
                } else {
                  alert(error.message);
                }
              });
          }}
        >
          <Form>
            <label htmlFor="firstname">First Name</label>
            <Field
              type="text"
              name="firstname"
              id="firstname"
              className="field"
              placeholder="John"
              autoComplete="off"
            />
            <ErrorMessage
              name="firstname"
              component={"div"}
              className="error-message"
            />

            <label htmlFor="lastname">Last Name</label>
            <Field
              type="text"
              name="lastname"
              id="lastname"
              className="field"
              placeholder="Doe"
              autoComplete="off"
            />
            <ErrorMessage
              name="lastname"
              component={"div"}
              className="error-message"
            />

            <label htmlFor="username">Username</label>
            <Field
              type="text"
              name="username"
              id="username"
              className="field"
              placeholder="johndoe"
              autoComplete="off"
            />
            <ErrorMessage
              name="username"
              component={"div"}
              className="error-message"
            />

            <label htmlFor="email">Email</label>
            <Field
              type="text"
              name="email"
              id="email"
              className="field"
              placeholder="abc@xyz.com"
              autoComplete="off"
            />
            <ErrorMessage
              name="email"
              component={"div"}
              className="error-message"
            />

            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              className="field"
              placeholder="********"
              autoComplete="off"
            />
            <ErrorMessage
              name="password"
              component={"div"}
              className="error-message"
            />

            <button type="submit">Sign Up</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
