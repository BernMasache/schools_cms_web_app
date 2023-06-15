import React, { useState } from "react";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import Router from "next/router";
import UserStore from "../../../../services/store/user.store";

/* `const userStore = new UserStore();` is creating a new instance of the `UserStore` class and
assigning it to the `userStore` constant. This allows the component to access the methods and
properties of the `UserStore` class, which is used to make API calls related to user authentication
and authorization. */
const userStore = new UserStore();

function UpdatePassword(props) {
  /* Initializing a state variable called `data` using the `useState` hook. The `data` variable is an
  object with two properties: `oldPassword` and `newPassword`, both of which are initially set to
  empty strings. The `setData` function is used to update the state of the `data` variable. */
  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  /**
   * The function updates the state with the value of the input field.
   */
  const getPasswordData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const updatePassword = (e) => {
    e.preventDefault();

    if (
      data.oldPassword == "" ||
      data.oldPassword == null ||
      data.oldPassword == undefined
    ) {
      toast.error("Fill the new password field", {
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
    } else if (
      data.newPassword == "" ||
      data.newPassword == null ||
      data.newPassword == undefined
    ) {
      toast.error("Please confirm the new password", {
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
    } else {
      if (data?.oldPassword == data?.newPassword) {
        data.id = props?.getUser()?.uuid;
  
        /* This code is making an API call to update the user's password using the `updatePassword`
        method from the `userStore` object. It then uses a promise chain to handle the response from
        the API call. If the response message is "password updated", it displays a success toast
        message and removes the user's token cookie before redirecting the user to the sign-in page
        after a delay of 2 seconds. If the response message is anything else, it displays an error
        toast message. The `catch` and `finally` blocks are empty and do not contain any code. */
        userStore
        .updatePassword(data)
        .then((result) => {
            if (result?.data?.message == "password updated") {
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
              Cookies.remove("G-APTVU");
              setTimeout(() => {
                Router.push("/signin");
              }, 2000);
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
          .catch((e) => {})
          .finally(() => {
          ;
          });
      } else {
        toast.error("Passwords does not match", {
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
    }
  };

  return (
    <div>
      <div className="mt-5 md:col-span-1 md:mt-0">
        <form>
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-8">
              <div className="grid grid-cols-6 gap-3">
                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="academicYear"
                    className="sr-only block text-sm font-medium text-gray-700"
                  >
                    Old password
                  </label>
                  <input
                    onChange={getPasswordData}
                    type="password"
                    name="oldPassword"
                    id="oldPassword"
                    placeholder="new password"
                    autoComplete="oldPassword"
                    className="mt-1 p-2 bg-gray-100 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="term"
                    className="sr-only block text-sm font-medium text-gray-700"
                  >
                    New password
                  </label>
                  <input
                    onChange={getPasswordData}
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    placeholder="confirm password"
                    autoComplete="newPassword"
                    className="mt-1 p-2 bg-gray-100 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                onClick={updatePassword}
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer transition={Flip} />
    </div>
  );
}

export default UpdatePassword;
