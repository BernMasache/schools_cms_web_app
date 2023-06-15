import { useEffect, useState } from "react";
import printToPDF from "../../../../../services/downloadPdf";
import ResetStudentPassword from "./resetPassword";

export default function StudentsDefaultPasswords(props) {
  const [form, setTheForm] = useState("");

  const setForm = (e) => {
    if (e.target.value == 0 || e.target.value == undefined) {
    } else {
      setTheForm(e.target.value);
      props?.getStudentsDefaultPasswords(e.target.value);
    }
  };
  const printPDF = () => {
    printToPDF("printDefaultPasswords", "Default passwords");
  };
  const resetStudentPassword = (e) => {
    e.preventDefault();
    props.resetStudentPassword({
      uuid: e.target.id,
      password: e.target.name,
    });
  };

  return (
    <div className="">
      <div className="border-b border-gray-200 pb-2 mb-2">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          NOTE
        </h3>
        <p className="max-w-4xl text-sm text-gray-500">
          Select the form to get the default passwords for the such students.
        </p>
      </div>
      <div className=" pb-5 sm:flex sm:items-center sm:justify-between">
        <div className="grid grid-col-1 lg:grid-cols-3 mg:grid-cols-3 gap-4">
          <select
            onChange={setForm}
            id="form"
            name="form"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option>--form--</option>
            <option value={1}>Form 1</option>
            <option value={2}>Form 2</option>
            <option value={3}>Form 3</option>
            <option value={4}>Form 4</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div className="">
          <div className="grid grid-col-1 lg:grid-cols-3 mg:grid-cols-3 gap-4 mb-4">
            <button
              onClick={printPDF}
              className="bg-orange-700 p-1 rounded text-white"
            >
              Print
            </button>
          </div>
          <div className="" id="printDefaultPasswords">
            <div className="w-full text-center p-4 min-w-full divide-y divide-gray-300 bg-gray-200 rounded-t-md">
              <h2>
                {form == "" ? "" : <span>Default passwords form : {form}</span>}
              </h2>
            </div>
            <table className="min-w-full divide-y divide-gray-300 shadow-md">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Registration Number
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Student
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Default Password
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="sr-only px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Manage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {typeof props?.studentsDefaultPasswords=="function"?"":
                  props?.studentsDefaultPasswords?.map(
                    (defaultPasswords, key) => (
                      <tr key={key}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {defaultPasswords.code}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {defaultPasswords.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {
                            defaultPasswords?.DefaultPasswordStores[0]
                              ?.passwordTemp
                          }
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">
                          {defaultPasswords?.DefaultPasswordStores[0]?.state ==
                          null
                            ? "generated"
                            : defaultPasswords?.DefaultPasswordStores[0]?.state}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          
                          <ResetStudentPassword studentId={defaultPasswords?.uuid} resetPassword={props.resetPassword}/>
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
