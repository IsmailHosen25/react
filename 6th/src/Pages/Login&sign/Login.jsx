import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import useAuth from "../../hook/useAuth";
export default function Login() {
  const navigate = useNavigate();
  const { logedin, setlogedin } = useAuth();

  const { handleChange, handleBlur, handleSubmit, touched, errors, values } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: yup.object({
        email: yup.string().email().required("Enter Your Email"),
        password: yup.string().required("Enter The Password"),
      }),
      onSubmit: (values) => {
        setlogedin(true);
        navigate("/profile");
      },
    });
  return (
    <div>
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <label className="inerror">{errors.email}</label>
        ) : null}
        <input
          type="password"
          placeholder="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <label className="inerror">{errors.password}</label>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
