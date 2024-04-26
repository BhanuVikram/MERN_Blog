import React from "react";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
import axios from "axios";
import "../../styles/pagesStyles/authPagesStyles/authPageStyles.scss";

const SignInSchema = Yup.object().shape({
  username: Yup.string().required("* Username is required"),
  password: Yup.string().required("* Valid password is required"),
});

const SignIn = () => {
  return (
    <div className="auth-form-container">
      <div className="auth-form">
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
                localStorage.setItem("accessToken", res.data.token);
              })
              .catch((err) => {
                console.log(res.error);
              });
          }}
        >
          <Form>
            <label htmlFor="username">Username</label>
            <Field
              type="username"
              name="username"
              id="username"
              className="field"
              placeholder="janedoe"
              autoComplete="off"
            />
            <ErrorMessage
              name="username"
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

            <button type="submit">Sign In</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
