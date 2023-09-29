import { useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
export default function Sign() {
  const navigate = useNavigate();
  const { logedin, setlogedin } = useAuth();
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    handleReset,
    values,
    setFieldValue,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cppassword: "",
      age: "",
      gender: "",
      python: "",
      cpp: "",
      country: "",
      file: "",
    },
    validationSchema: yup.object({
      username: yup.string().min(2).max(30).required("Enter Your Name"),
      email: yup.string().email().required("Enter Your Email"),
      password: yup.string().min(7).required("Enter The Password"),
      cppassword: yup
        .string()
        .required()
        .oneOf([yup.ref("password"), null], "password mush match"),
      age: yup.number().min(8).max(200).required("age is requird"),
      gender: yup.string().required("Gender is requird"),
    }),
    onSubmit: (values) => {
      setlogedin(true);
      navigate("/profile");
    },
  });
  return (
    <div>
      <h1>Sign Up</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && touched.username ? (
          <label className="inerror">{errors.username}</label>
        ) : null}
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
        <input
          type="password"
          placeholder="confirm password"
          name="cppassword"
          value={values.cppassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.cppassword && touched.cppassword ? (
          <label className="inerror">{errors.cppassword}</label>
        ) : null}
        <input
          type="number"
          placeholder="age"
          name="age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.age && touched.age ? (
          <label className="inerror">{errors.age}</label>
        ) : null}
        <div className="gender">
          <input type="radio" id="male" name="gender" onChange={handleChange} />
          <label htmlFor="male">Male</label>
          <br />
          <input
            type="radio"
            id="female"
            name="gender"
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="others"
            name="gender"
            onChange={handleChange}
          />
          <label htmlFor="others">Other's</label>
          <br />
          {errors.gender && touched.gender ? (
            <label className="inerror">{errors.gender}</label>
          ) : null}
        </div>
        <div className="cheackbox">
          <input
            type="checkbox"
            id="python"
            name="python"
            onChange={handleChange}
          />
          <label htmlFor="python">Python</label>
          <input type="checkbox" id="C++" name="cpp" onChange={handleChange} />
          <label htmlFor="C++" name="skill">
            C++
          </label>
        </div>
        <label htmlFor="country">Choose Country: </label>
        <select id="country" name="country" onChange={handleChange}>
          <option>Bangladesh</option>
          <option>USA</option>
          <option>UK</option>
        </select>
        <input
          type="file"
          onChange={(e) => setFieldValue("file", e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
