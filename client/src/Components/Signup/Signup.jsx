import React from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import '../Login/Login.css'
import axios from 'axios'

function Signup() {
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const LoginUser = async (userName,email, password) => {
    try {
      const login = await axios.post(
        "http://localhost:4000/auth/signup",
        {
          userName,
          email,
          password
        }
      );
      if(login.status===200){
        navigate('/home')
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = (data) => {
    LoginUser(data.username,data.email,data.password)
  };
  return (
    <div className="bg-no-repeat bg-cover bg-center w-screen h-screen main-container">
      <div className="flex w-full h-full justify-center items-center">
        <div className="w-2/5 h-3/4 bg-white backdrop-blur-sm bg-opacity-20">
          <form onSubmit={handleSubmit(onSubmit)} className="p-8">
            <p className="font-serif font-semibold text-4xl text-white flex w-full justify-center">
              SignUp
            </p>
            <div className="mt-10">
              <label htmlFor="" className="text-2xl text-white">Username</label>
              <input
                type="text"
                {...register("username")}
                className="p-1 w-full h-10 mt-1"
              />
            </div>
            <div className="mt-10">
              <label htmlFor="" className="text-2xl text-white">Email</label>
              <input
                type="email"
                {...register("email")}
                className="p-1 w-full h-10 mt-1"
              />
            </div>
            <div className="mt-10">
              <label htmlFor="" className="text-2xl text-white">Password</label>
              <input
                type="password"
                {...register("password")}
                className="p-1 w-full h-10 mt-1"
              />
            </div>
            <button type="submit" className="bg-white px-8 py-2 mt-10">Signup</button>
            {/* <p>Not Registered<Link>SignUp Here</Link></p> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup