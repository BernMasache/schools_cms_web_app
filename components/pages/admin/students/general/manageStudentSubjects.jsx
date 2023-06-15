import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export default function ManageStudentSubjectsAssignedList(props) {
  const pdfRef = useRef();
  const [open, setOpen] = useState(false);
  const [teacherSubjects, setTeacherSubjects] = useState([]);

  const printPDF = useReactToPrint({
    content: () => pdfRef.current,
  });

  const setTeacher = (e) => {
    if (e.target.value == undefined) {
    } else {
      Cookies.set("SID", JSON.stringify(e.target.value));
      setDataLoader();
    }
  };

  const setAcademicYear = (e) => {
    if (e.target.value == undefined) {
    } else {
      Cookies.set("SACY", JSON.stringify(e.target.value));
      setDataLoader();
    }
  };

  const loadData = () => {
    if (
      Cookies.get("SID") == undefined ||
      Cookies.get("SID") == null ||
      Cookies.get("SACY") == undefined ||
      Cookies.get("SACY") == null
    ) {
      Swal.fire({
        title: "Failed",
        icon: "error",
        text: "No data available",
      });
    } else {
      let data = JSON.parse(Cookies.get("SSA"));
      if (data.length > 0) {
        setTeacherSubjects(data);
        setOpen(true);
      }
    }
  };

  const setDataLoader = () => {
    if (
      Cookies.get("SID") == undefined ||
      Cookies.get("SID") == null ||
      Cookies.get("SACY") == undefined ||
      Cookies.get("SACY") == null
    ) {
    } else {
      let body = {
        studentId: JSON.parse(Cookies.get("SID")),
        academicYear: JSON.parse(Cookies.get("SACY")),
        form: JSON.parse(Cookies.get("SFO")),

      };
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="pb-2 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Manage student subjects
        </h3>
        <div className="mt-3 flex lg:flex-row flex-col sm:ml-4 sm:mt-0 gap-4">
          <select
            onChange={setTeacher}
            id="location"
            name="location"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue="Canada"
          >
            <option>--form--</option>
            {[
              {form:1,id:1},
              {form:2,id:2},
              {form:3,id:3},
              {form:4,id:4},
            ].map((form, i) => {
                return (
                  <option value={form.id} key={i}>
                    {form.form}
                  </option>
                );
              })}
          </select>
          <select
            onChange={setTeacher}
            id="location"
            name="location"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue="Canada"
          >
            <option>--student--</option>
            {/* {props &&
              props.teachers.map((teacher, i) => {
                return (
                  <option value={teacher.uuid} key={i}>
                    {teacher.name}
                  </option>
                );
              })} */}
          </select>

          <select
            onChange={setAcademicYear}
            id="location"
            name="location"
            className="inline-flex items-center mt-2 w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue="Canada"
          >
            <option>--academic year--</option>
            {props &&
              props.academicYears.map((academicYear, i) => {
                return (
                  <option value={academicYear.uuid} key={i}>
                    {academicYear.academicYear}
                    {" - "}term {academicYear.term}
                  </option>
                );
              })}
          </select>

          <button
            onClick={loadData}
            type="button"
            className="inline-flex items-center rounded-md bg-sky-700 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Load
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            ref={pdfRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-w-full py-2 align-middle md:px-6 lg:px-8 gap-5"
          >
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {open == true ? (
                <table className="min-w-full divide-y divide-gray-300 overflow-x-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Form
                      </th>

                      <th
                        scope="col"
                        className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Subject
                      </th>

                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        <span className="sr-only">manage</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                   
                  </tbody>
                </table>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
