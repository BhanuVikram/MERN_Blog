import React from "react";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Enter your first name"),
  lastName: Yup.string().required("Enter your last name"),
  age: Yup.number()
    .required("Enter your age")
    .min(18, "You must be 18 years old")
    .integer("Enter valid age"),
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
          firstName: "",
          lastName: "",
          age: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log("values:", values);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name:</label>
          <Field
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
            autocomplete="off"
          />
          <ErrorMessage name="firstName" component={"div"} />

          <label htmlFor="lastName">Last Name:</label>
          <Field
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Doe"
            autocomplete="off"
          />
          <ErrorMessage name="lastName" component={"div"} />

          <label htmlFor="age">Age:</label>
          <Field
            type="text"
            name="age"
            id="age"
            placeholder="25"
            autocomplete="off"
          />
          <ErrorMessage name="age" component={"div"} />

          <label htmlFor="age">Email:</label>
          <Field
            type="text"
            name="email"
            id="email"
            placeholder="abc@xyz.com"
            autocomplete="off"
          />
          <ErrorMessage name="email" component={"div"} />

          <label htmlFor="age">Password:</label>
          <Field
            type="password"
            name="password"
            id="password"
            placeholder="*****"
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
