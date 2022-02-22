/** @format */

import  React, { useState } from "react";
import { useRef } from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import Image from "next/image";
import { MdLockOutline } from "react-icons/md";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineWarning } from "react-icons/ai";

interface IFormInput {
  password: string;
  password_repeat: string;
}

const ResetPassword: NextPage = () => {
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
    <Layout title="Forgot password">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 bg-blockchain-pattern ">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/2 max-w-2x4 ">
              <div className="m-16 p-8">
                {/* Sign in section */}
                <div
                  style={{
                    position: "relative",
                    width: "180%",
                    height: "50px",
                    maxHeight: "50px",
                    maxWidth: "100%",
                    bottom: "5px",
                  }}
                >
                  <Image
                    src="/images/project_labrador_logo.png"
                    alt="Project Labrador"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-blue-500   ">
                    Create new password
                  </h2>
                  <div className="border-2 w-10 border-blue-500 inline-block mb-2 "></div>
                  <div className="flex justify-center mb-2 "></div>
                  <p className="text-gray-500 my-3">
                    or use your email account
                  </p>
                  <div className="flex flex-col items-center">
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
                          className='text-gray-600 m-2 hover:text-blue-500'
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

                     <input
                      type="submit"
                      className="border-2 cursor-pointer border-blue-500 text-blue-500 rounded-full px-12 p-3 mt-8 inline-block font-semibold hover:bg-blue-500 hover:text-white"
                      value="Sign In"
                    />

                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </form>
    </Layout>
  );
};

export default ResetPassword;
