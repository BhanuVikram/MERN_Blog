import React from "react";

import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignIn = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor="email">Email:</label>
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="aaa@bbb.com"
            autocomplete="off"
          />
          <ErrorMessage name="email" component={"div"} />

          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            name="password"
            id="password"
            placeholder="*****"
            autocomplete="off"
          />
          <ErrorMessage name="password" component={"div"} />

          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
