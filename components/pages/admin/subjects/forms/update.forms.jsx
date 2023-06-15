import React, { useState } from "react";

function UpdateSubject(props) {
  const [updatedDetails, setDetails] = useState({
    id: "",
    code: "",
    name: "",
  });

  const getDetails = (e) => {
    setDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const updateSubject = (e) => {
    e.preventDefault();
    props?.update(updatedDetails);
  };

  return (
    <div>
      <div className="">
        <div className="max-auto max-w-xl">
          <form onSubmit={updateSubject}>
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
                      id="id"
                      name="id"
                      onChange={getDetails}
                      autoComplete="id"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value={0}>--Select subject--</option>
                      {props && typeof props?.subjects == "object"
                        ? props?.subjects?.map((subject, key) => {
                            return (
                              <option
                                key={key}
                                value={subject?.uuid}
                                className="capitalize"
                              >
                                {subject?.code} - {subject?.name}
                              </option>
                            );
                          })
                        : ""}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="academic-year"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subject code
                    </label>
                    <input
                      onChange={getDetails}
                      type="text"
                      name="code"
                      id="code"
                      autoComplete="code"
                      className="mt-1 p-2 bg-gray-100  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="academic-year"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subject name
                    </label>
                    <input
                      onChange={getDetails}
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="mt-1 p-2 bg-gray-100  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <div className="flex w-full justify-end">
                  <button
                    type="submit"
                    className="inline-flex mr-2 justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Update
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

export default UpdateSubject;
