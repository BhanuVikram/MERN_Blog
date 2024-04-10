import React from "react";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
import axios from "axios";
import "../../styles/pagesStyles/authPagesStyles/signUpPageStyles.scss";

const SignUpSchema = Yup.object().shape({
  firstname: Yup.string().required("Enter your first name"),
  lastname: Yup.string().required("Enter your last name"),
  username: Yup.string().required("Enter your desired username"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignUp = () => {
  return (
    <div>
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
          console.log("values:", values);
          axios
            .post(`http://localhost:8000/api/v1/signup`, values)
            .then((res) => {
              console.log(res.message);
            })
            .catch((err) => {
              console.log(res.error);
            });
        }}
      >
        <Form>
          <label htmlFor="firstname">First Name:</label>
          <Field
            type="text"
            name="firstname"
            id="firstname"
            placeholder="John"
            autoComplete="off"
          />
          <ErrorMessage name="firstname" component={"div"} />

          <label htmlFor="lastname">Last Name:</label>
          <Field
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Doe"
            autoComplete="off"
          />
          <ErrorMessage name="lastname" component={"div"} />

          <label htmlFor="username">Username:</label>
          <Field
            type="text"
            name="username"
            id="username"
            placeholder="johndoe"
            autoComplete="off"
          />
          <ErrorMessage name="username" component={"div"} />

          <label htmlFor="email">Email:</label>
          <Field
            type="text"
            name="email"
            id="email"
            placeholder="abc@xyz.com"
            autoComplete="off"
          />
          <ErrorMessage name="email" component={"div"} />

          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            name="password"
            id="password"
            placeholder="********"
            autoComplete="off"
          />
          <ErrorMessage name="password" component={"div"} />

          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
