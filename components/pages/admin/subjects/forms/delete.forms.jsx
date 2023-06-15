import React, { useState } from "react";
import Swal from "sweetalert2";

function DeleteSubject(props) {
  const [updatedDetails, setDetails] = useState({
    uuid: "",
  });

  const getDetails = (e) => {
    setDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const deleteSubject = (e) => {
    e.preventDefault();
    props.delete(updatedDetails.uuid)
  };

  return (
    <div>
      <div className="">
        <div className="max-auto max-w-xl">
          <form onSubmit={deleteSubject}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-8">
                <div className="grid grid-cols-6 gap-3">
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subjects
                    </label>
                    <select
                      id="uuid"
                      name="uuid"
                      onChange={getDetails}
                      autoComplete="uuid"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value={0}>--Select subject--</option>
                      {props &&
                        props.subjects.map((subject, key) => {
                          return (
                            <option key={key} value={subject.uuid}>
                              {subject.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>  
                <div className="mt-2">
                <p className="text-lg">
                    Note
                </p>
                <p className="text-sm text-gray-500">
                    The subject can only be deleted if it is not assigned to any teacher or student.
                </p>
              </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <div className="flex w-full justify-end">
                  <button
                    type="submit"
                    className="inline-flex mr-2 justify-center rounded-md border border-transparent bg-red-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeleteSubject;
