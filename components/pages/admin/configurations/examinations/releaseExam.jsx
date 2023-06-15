import React, { useState } from "react";

function ReleaseExam(props) {
  const [releaseDetails, setAcademicYear] = useState({
    academicYear: "",
  });

  const getNewAcademicYear = (e) => {
    setAcademicYear({
      ...releaseDetails,
      [e.target.name]: e.target.value,
    });
  };

  const release = (e) => {
    e.preventDefault();
    props.releaseExam(releaseDetails.academicYear);
  };

  return (
    <div>
      <div className="">
        <div className="max-auto max-w-xl">
          <form onSubmit={release}>
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
                        props.academicYears.map((academicYear, key) => {
                          return (
                            <option key={key} value={academicYear.uuid}>
                              {academicYear.academicYear} - term{" "}
                              {academicYear.term}
                            </option>
                          );
                        })}
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
                    Release
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

export default ReleaseExam;
