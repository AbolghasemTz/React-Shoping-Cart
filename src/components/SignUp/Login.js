import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../common/Input";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import signImage from "../../assets/images/beerPic.jpg";
import { useQuery } from "../../hooks/useQuery";

const initialValues = {
  email: "",
  password: "",
};

let validationSchema = Yup.object({
  email: Yup.string().email("Inavlid Email").required("Email Is Requaired"),

  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const redirect = query.get("redirect" || "/");
  const onSubmit = (valus) => {
    console.log(valus);
    navigate("/checkout");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="bg-gray-50 grid grid-cols-12 border p-10 min-h-screen">
      <div className="bg-green-400 md:col-span-6 col-span-12 mr-8 rounded-md">
        <h2 className="font-bold text-center pt-4 text-white text-3xl tracking-widest">
          LOGIN
        </h2>
        <div className="w-full  py-4 px-6 ">
          <img src={signImage} alt="sign up" className="rounded-lg w-full " />
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className=" md:col-span-6 col-span-12"
      >
        <div className="mb-6 flex md:items-start items-center flex-col">
          <img className="w-16 h-16 rounded-full " src={logo} alt="logo" />
          <h2 className="font-bold pt-4">Hello Again!</h2>
        </div>
        <Input formik={formik} name="email" label="Email" />

        <Input
          formik={formik}
          name="password"
          type="password"
          label="Password"
        />

        <button
          className="text-white mt-6 cursor-pointer bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          type="submit"
          disabled={!formik.isValid}
        >
          Login
        </button>
        <Link to={`/signup?redirect=${redirect}`}>
          <p className="mt-6 text-sm">Not signup yet !</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
