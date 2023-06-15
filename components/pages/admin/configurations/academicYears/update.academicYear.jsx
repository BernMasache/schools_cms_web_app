import React, { useState } from "react";

function UpdateAcademicYear(props) {
  const [updatedDetails, setAcademicYear] = useState({
    academicYear: "",
    newAcademicYear: "",
    newTerm: 0,
  });

  const getNewAcademicYear = (e) => {
    setAcademicYear({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const updateAcademicYear = (e) => {
    e.preventDefault();
    props?.update(updatedDetails);
  };

  return (
    <div>
      <div className="">
        <div className="max-auto max-w-xl">
          <form onSubmit={updateAcademicYear}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-8">
                <div className="grid grid-cols-6 gap-3">
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Academic year
                    </label>
                    <select
                      id="academicYear"
                      name="academicYear"
                      onChange={getNewAcademicYear}
                      autoComplete="academicYear"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value={0}>--Select academic year--</option>
                      {props &&
                        typeof props?.academicYears=="object"?props?.academicYears?.map((academicYears, key) => {
                          return (
                            <option key={key} value={academicYears?.uuid}>
                              {academicYears?.academicYear} - term{" "}
                              {academicYears?.term}
                            </option>
                          );
                        }):""}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="academic-year"
                      className="block text-sm font-medium text-gray-700"
                    >
                      New Academic Year
                    </label>
                    <input
                      onChange={getNewAcademicYear}
                      type="text"
                      name="newAcademicYear"
                      id="newAcademicYear"
                      autoComplete="newAcademicYear"
                      className="mt-1 p-2 bg-gray-100  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="new-term"
                      className="block text-sm font-medium text-gray-700"
                    >
                      New Term
                    </label>
                    <select
                      onChange={getNewAcademicYear}
                      id="newTerm"
                      name="newTerm"
                      autoComplete="new-term-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value={0}>--Select term--</option>
                      <option value={1}>Term 1</option>
                      <option value={2}>Term 2</option>
                      <option value={3}>Term 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <div className="flex w-full justify-end">
                  <button
                    type="submit"
                    className="inline-flex mr-2 justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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

export default UpdateAcademicYear;
