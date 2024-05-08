import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
import axios from "axios";
import "../../styles/pagesStyles/authPagesStyles/authPageStyles.scss";

const SignInSchema = Yup.object().shape({
  username: Yup.string().required("* Username is required"),
  password: Yup.string().required("* Valid password is required"),
});

const SignIn = () => {
  const navigate = useNavigate();

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
                localStorage.setItem("accessToken", res.data.token);
                localStorage.setItem("username", res.data.user.username);
                localStorage.setItem("expires", res.data.expires);
                if (res.data.user.role && res.data.user.role === "user") {
                  navigate("/");
                } else if (
                  res.data.user.role &&
                  res.data.user.role === "admin"
                ) {
                  navigate("/dashboard");
                  window.location.reload();
                }
              })
              .catch((err) => {
                console.log(err);
                if (err.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(err.response.data);
                  console.log(err.response.status);
                  console.log(err.response.headers);
                  alert(err.response.data.message || "An error occurred");
                } else if (err.request) {
                  // The request was made but no response was received
                  console.log(err.request);
                  alert("No response was received");
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log("Error", err.message);
                  alert(err.message);
                }
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
