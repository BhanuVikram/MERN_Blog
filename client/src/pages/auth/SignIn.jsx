import React from "react";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
import axios from "axios";

const SignInSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignIn = () => {
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          console.log(values);
          axios
            .post(`http://localhost:8000/api/v1/signin`, values)
            .then((res) => {
              console.log(res.message);
            })
            .catch((err) => {
              console.log(res.error);
            });
        }}
      >
        <Form>
          <label htmlFor="username">Username:</label>
          <Field
            type="username"
            name="username"
            id="username"
            placeholder="janedoe"
            autocomplete="off"
          />
          <ErrorMessage name="username" component={"div"} />

          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            name="password"
            id="password"
            placeholder="********"
            autocomplete="off"
          />
          <ErrorMessage name="password" component={"div"} />

          <button type="submit">Sign In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
