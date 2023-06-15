import { Router } from "next/router";
import React, { useEffect } from "react";
export default function StudentProfile(props) {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Student Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Personal details.
        </p>
      </div>
      {
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {props?.student != null ? props?.student?.name : ""}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Class</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {props?.student != null ? props?.student?.currentForm : ""}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Sex</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {props?.student != null ? (
                  <span>{props?.student?.sex == "m" ? "Male" : "Female"}</span>
                ) : (
                  ""
                )}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Contact</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {props?.student != null ? props?.student?.phone : ""}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">
                More Details
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                Enrolled in form{" "}
                {props?.student != null ? props?.student?.formEnrolled : ""},
                currently in form {props?.student?.currentForm}
              </dd>
            </div>
          </dl>
        </div>
      }
 
    </div>
  );
}
