import  React, { useState } from "react";
import { useRef } from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import Image from "next/image";
import { MdLockOutline } from "react-icons/md";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineWarning } from "react-icons/ai";
import {
  FaRegEnvelope,
  FaEye,
  FaEyeSlash,
  
  
} from 'react-icons/fa';

interface IFormInput {
  email: string;
  password: string;
  password_repeat: string;
}


const RegisterPage: NextPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <Layout title="Register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 bg-blockchain-pattern">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-5xl">
              <div className="w-3/6">
                {/* Sign in section */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "50px",
                    maxHeight: "50px",
                    maxWidth: "100%",
                    marginTop: "44px",
                  }}
                >
                  <Image
                    src="/images/project_labrador_logo.png "
                    alt="Project Labrador"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-blue-500">
                    Register new Account
                  </h2>
                  <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
                  <div className="flex justify-center  my-2 "></div>

                  <div className="flex flex-col items-center">
                    <div className="bg-gray-200 w-64 p-2 flex items-center  my-2 ">
                      <FaRegEnvelope className="text-gray-400 m-2" />
                      <input
                        type="text"
                        placeholder="Email"
                        className="bg-gray-200 outline-none text-sm flex-1 "
                        {...register("email", {
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                      />
                    </div>
                    {errors?.email?.type === "required" && (
                      <div className="text-left w-64 mb-1">
                        {" "}
                        <p className="text-sm text-red-600 flex">
                          <AiOutlineWarning className="text-sm mx-2 my-1" />
                          This field is required
                        </p>
                      </div>
                    )}
                    {errors?.email?.type === "pattern" && (
                      <div className="text-left w-64 mb-1">
                        {" "}
                        <p className="text-sm text-red-600 flex">
                          <AiOutlineWarning className="text-sm mx-2 my-1" />
                          Please enter a valid email Id
                        </p>
                      </div>
                    )}

                    <div className="bg-gray-200 w-64 p-2 flex items-center my-2">
                      <MdLockOutline className="text-gray-400 m-2" />

                      <input
                        type={passwordShown ? 'text' : 'password'}
                        placeholder="Password"
                        className="bg-gray-200 outline-none text-sm flex-1"
                        {...register("password", {
                          required: true,
                          pattern:
                            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                        })}
                      />
                     {passwordShown ? (
                        <FaEyeSlash
                          className='text-gray-600 m-2  hover:text-blue-500'
                          onClick={togglePasswordVisiblity}
                        />
                      ) : (
                        <FaEye
                          className='text-gray-600 m-2 cursor-pointer hover:text-blue-500'
                          onClick={togglePasswordVisiblity}
                        />
                      )}

                    </div>

                    {errors?.password?.type === "required" && (
                      <div className="text-left w-64 mb-1">
                        {" "}
                        <p className="text-sm text-red-600 flex">
                          <AiOutlineWarning className="text-sm mx-2 my-1" />
                          This field is required
                        </p>
                      </div>
                    )}
                    {errors?.password?.type === "pattern" && (
                      <div className="text-left w-64 mb-1">
                        <p className="text-sm text-red-600 flex">
                          <AiOutlineWarning className="text-sm mx-2 my-1" />
                          Minimum eight characters, at least one uppercase and
                          lowercase character, one number and one special
                          character
                        </p>
                      </div>
                    )}

                    <div className="bg-gray-200 w-64 p-2 flex items-center my-2">
                      <MdLockOutline className="text-gray-400 m-2" />
                      <input
                        type="password"
                        placeholder="Password again"
                        className="bg-gray-200 outline-none text-sm flex-1"
                        {...register("password_repeat", {
                          required: "This field is required",
                          validate: (value) =>
                            value === password.current ||
                            "The passwords do not match",
                        })}
                      />
                    </div>
                    {errors.password_repeat && (
                      <p className="text-sm text-red-600 flex">
                        {" "}
                        <AiOutlineWarning className="text-sm mx-2 my-1" />
                        {errors.password_repeat.message}
                      </p>
                    )}
                   <label className="flex items-center text-xs">
                      <input type="checkbox" className="m-3 cursor-pointer " />
                      <p className="text-gray-600  my-3 text-sm">
                        <span>
                          Lorem ipsum dolor sit amet elit. Id, neque! me
                        </span>
                      </p>
                    </label>

                    <label className="flex items-center text-xs">
                      <input type="checkbox" className="m-3 cursor-pointer " />
                      <p className="text-gray-600  my-3 text-sm">
                        <span>
                          Lorem ipsum dolor sit amet elit. Id, neque! me
                        </span>
                      </p>
                    </label>

                    <input
                      type="submit"
                      className="border-2 cursor-pointer border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font-semibold bg-white hover:bg-blue-500 hover:text-white"
                      value="Sign In"
                    />
                  </div>
                </div>
              </div>
              <div className="w-3/6 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-32 px-12">
                <ul>
                  <li className="flex">
                    <BsFillArrowRightCircleFill className="mr-2 mt-0 text-4xl " />
                    <span className="text-left  mb-10">
                      <p className="text-white">
                        <span className="font-bold">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit.
                        </span>
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </span>
                  </li>

                  <li className="flex">
                    <BsFillArrowRightCircleFill className="mr-2 mt-0 text-4xl text-gray-100" />
                    <span className="text-left mb-10">
                      <p className="text-white">
                        <span className="font-bold">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit.
                        </span>
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </span>
                  </li>
                  <li className="flex">
                    <BsFillArrowRightCircleFill className="mr-2 mt-1 text-4xl" />
                    <span className="text-left  mb-10">
                      <p className="text-white">
                        <span className="font-bold">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit.
                        </span>
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </span>
                  </li>
                  <li className="flex">
                    <BsFillArrowRightCircleFill className="mr-2 mt-1 text-4xl" />
                    <span className="text-left  mb-10">
                      <p className="text-white">
                        <span className="font-bold">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit.
                        </span>
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </form>
    </Layout>
  );
};
export default RegisterPage;
