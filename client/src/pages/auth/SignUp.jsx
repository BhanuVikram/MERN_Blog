import React from "react";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";

const SignupSchema = Yup.object().shape({
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
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log("values:", values);
        }}
      >
        <Form>
          <label htmlFor="firstname">First Name:</label>
          <Field
            type="text"
            name="firstname"
            id="firstname"
            placeholder="John"
            autocomplete="off"
          />
          <ErrorMessage name="firstname" component={"div"} />

          <label htmlFor="lastname">Last Name:</label>
          <Field
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Doe"
            autocomplete="off"
          />
          <ErrorMessage name="lastname" component={"div"} />

          <label htmlFor="username">Username:</label>
          <Field
            type="text"
            name="username"
            id="username"
            placeholder="johndoe"
            autocomplete="off"
          />
          <ErrorMessage name="username" component={"div"} />

          <label htmlFor="email">Email:</label>
          <Field
            type="text"
            name="email"
            id="email"
            placeholder="abc@xyz.com"
            autocomplete="off"
          />
          <ErrorMessage name="email" component={"div"} />

          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            name="password"
            id="password"
            placeholder="********"
            autocomplete="off"
          />
          <ErrorMessage name="password" component={"div"} />

          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
