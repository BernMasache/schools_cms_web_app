import React, { useState } from "react";

function SetCurrentAcademicYear(props) {
  const [academicYears, setAcademicYear] = useState({
    academicYear: "",
  });

  const setAcademicYears = (e) => {
    setAcademicYear({
      ...academicYears,
      [e.target.name]: e.target.value,
    });
  };

  const setCurrentAcademicYear = (e) => {
    e.preventDefault();
    props.setCurrentAcademicYear(academicYears?.academicYear);
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
                    htmlFor="term"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Academic Years
                  </label>
                  <select
                    onChange={setAcademicYears}
                    id="academicYear"
                    name="academicYear"
                    autoComplete="term"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value={0}>--academic years--</option>
                    {typeof props?.academicYears=="object"? props?.academicYears?.map((academicYear, key) => {
                        return (
                          <option value={academicYear?.uuid} key={key}>
                            {academicYear?.academicYear} - Term{" "}
                            {academicYear?.term}
                          </option>
                        );
                      }):""}
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                onClick={setCurrentAcademicYear}
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Set
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SetCurrentAcademicYear;
