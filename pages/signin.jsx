import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useState, useEffect } from "react";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthLayout } from "../components/layouts/authLayout";
import UserStore from "../services/store/user.store";
import Cookiess from "js-Cookies";
import Cookies from "js-cookie";
import useCrypto from "../services/cryptoJs";
// import { Logo } from '@/components/Logo'
const userStore = new UserStore();
const crypto = new useCrypto();
export default function Login() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const getUserDetails = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const signinUser = (e) => {
    e.preventDefault();
    if (user.name == "" || user.name == undefined || user.name == null) {
      toast.error("Username is required", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        transition: Flip,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (
      user.password == "" ||
      user.password == undefined ||
      user.password == null
    ) {
      toast.error("Password is required", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        transition: Flip,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      userStore
        .signin({
          name: user.name,
          password: user.password,
        })
        .then((result) => {
          if (result?.data?.error == false) {
            let role = "";
            let user = JSON.stringify(result.data.user);
            let token = { token: result.data.token };
            if (result.data.user.role == "user1") {
              Cookies.set("G-APTVU", crypto.encrypt(JSON.stringify(token)), {
                expires: 5 / 24,
                sameSite: "lax",
              });
              Cookies.set("G-AUDS", crypto.encrypt(user), {
                expires: 5 / 24,
                sameSite: "lax",
              });

              toast.success(result?.data?.message, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                transition: Flip,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });

              Router.push("/admin");
            } else {
              toast.error(result?.data?.message, {
                position: "top-right",
                transition: Flip,
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          } else {
            toast.error(result?.data?.message, {
              position: "top-right",
              transition: Flip,
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        .catch((e) => {
          toast.error(e.message, {
            position: "top-right",
            transition: Flip,
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };
  return (
    <>
      <Head>
        <title>xamPortal CMS</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            {/* <Logo className="h-10 w-auto" /> */}
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">Welcome to</h2>
            <p className="mt-2 text-xl text-gray-700">
              Content Management System for XamPortal
            </p>
            <p className="mt-2 text-sm text-gray-500">Please sign in</p>
          </div>
        </div>
        <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
          <input
            onChange={getUserDetails}
            className="block bg-gray-100 p-4 w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            label="Email address"
            id="email"
            name="name"
            placeholder="username"
            type="text"
            autoComplete="email"
            required
          />
          <input
            onChange={getUserDetails}
            className="block bg-gray-100 p-4 w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            label="Password"
            id="password"
            placeholder="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
          <div>
            <button
              onClick={signinUser}
              type="submit"
              variant="solid"
              color="blue"
              className="w-full bg-sky-600 text-white rounded-md border border-gray-300 py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>
        <ToastContainer transition={Flip} />
      </AuthLayout>
    </>
  );
}
